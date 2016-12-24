/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import undoable from 'redux-undo'
import {distinctBoardFilter} from '../utility/Board'

/*
mergeBoard
  -rotateLeft/Right
  -mergeLeft/Right
addNewTile
*/
const Board = (state = 0, action) => {
    if(state === 0){
        return createBoard();
    }
    switch (action.type) {
      case 'MERGE_UP':
        return mergeBoardUp(state.board);
      case 'MERGE_DOWN':
        return mergeBoardDown(state.board);
      case 'MERGE_LEFT':
        return mergeBoardLeft(state.board);
      case 'MERGE_RIGHT':
        return mergeBoardRight(state.board);
      case 'NEW_GAME':
          return createBoard();
      case 'ADD_TILE':
          var newState = state.board.slice();
          newState[action.x][action.y]=action.value;
          return {
            ...state,
            board: newState
          }
      default:
          return state;
    }
}

function createBoard() {
  return {
    board: [[0,0,0,0],
            [0,0,0,0],
            [0,0,0,0],
            [0,0,0,0]],
    scoreIncrease: 0
  };
}

function shiftRowRight(a){
    var row = a.map(x => x);
    var previousIndex = row.length - 1;
    for(let i = row.length - 1; i >= 0 ; i--){
        if(row[i] !== 0){
            row[previousIndex] = row[i];
            if(i !== previousIndex){
                row[i] = 0;
            }
            previousIndex--;
        }
    }
    return row;
}

function shiftRowLeft(a){
    var row = a.map(x => x);
    var previousIndex = 0;
    for(let i = 0; i < row.length ; i++){
        if(row[i] !== 0){
            row[previousIndex] = row[i];
            if(i !== previousIndex){
                row[i] = 0;
            }
            previousIndex++;
        }
    }
    return row;
}

function mergeBoardUp (board) {
    var b = rotateBoardRight(board);
    var c = mergeBoardRight(b);
    var d = rotateBoardLeft(c.board);
    return {
      board:d,
      scoreIncrease: c.scoreIncrease
    }
}

function mergeBoardRight(board){
  let scoreIncrease = 0;
  var b = board.map(row => {
    var a = row.map(x => x);
    a = shiftRowRight(a);
    for(let i = a.length -1; i >= 0; i--){
        for(let j = i - 1; j >= 0; j--){
            if(a[j] && a[j] !== 0 && a[i] === a[j]){
                scoreIncrease += a[i];
                a[i] *= 2;
                a[j] = 0;
                a = shiftRowRight(a);
                i--;
            }
            else if(a[j] !== 0)
                break;
        }//j
    }//i
    return a;
  })
  return {
    board:b,
    scoreIncrease: scoreIncrease
  }
}

function mergeBoardDown(board) {
    var b = rotateBoardLeft(board);
    var c = mergeBoardRight(b);
    var d = rotateBoardRight(c.board);
    return {
      board: d,
      scoreIncrease: c.scoreIncrease
    }
}

function mergeBoardLeft (board){
  let scoreIncremented = 0;
  let b = board.map(row => {
    let a = row.map(x => x);
    a = shiftRowLeft(a);
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
          if(a[j] && a[j] !== 0 && a[i] === a[j]){
            a[i] *= 2;
            scoreIncremented += a[i];
            a[j] = 0;
            a = shiftRowLeft(a);
            i++;
          }
          else if(a[j] !== 0)
            break;
        }//j
    }//i
    return a;
  })
  return{
    board: b,
    scoreIncrease: scoreIncremented
  }
}

function rotateBoardRight(board){
    let temp = new Array(board.length);
    var i, j;
    for(i = 0; i < temp.length; ++i){
        temp[i] = new Array(temp.length);
        for (j = 0; j < temp.length; ++j){
            temp[i][j] = board[temp.length - j - 1][i];
        }
    }
    return temp;
}

function rotateBoardLeft(board){
    var temp = new Array(board.length);
    var i, j;
    for(let i = 0; i < temp.length; i++){
        temp[i] = new Array(temp.length);
    }
    for(i = 0; i < temp.length; ++i){
        for (j = 0; j < temp.length; ++j){
            temp[i][j] = board[j][temp.length - i - 1];
        }
    }
    return temp;
}

const undoableBoard = undoable(Board,
    {filter: distinctBoardFilter}
)

export default undoableBoard;
