/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import undoable from 'redux-undo'

const Board = (state = 0, action) => {
    if(state === 0){
        return createBoard();
    }
    switch (action.type) {
        case 'MOVE_UP':
            return move(state, 0);
        case 'MOVE_RIGHT':
            return move(state, 1);
        case 'MOVE_DOWN':
            return move(state, 2);
        case 'MOVE_LEFT':
            return move(state, 3);
        case 'NEW_GAME':
            return createBoard();
        default:
            return state;
    }
}

function createBoard() {
    var board = [];//initialize array
    var boardSize = 4;
    var popRate = 0.2;
    for (var i = 0 ; i < boardSize; i++) {
        board[i] = [];//initialize inner array
        for (var j = 0; j < boardSize; j++) {//i++ = j++
            if(Math.random() < popRate){ //20% chance
                board[i][j] = getNewTileValue();
            }
            else{
                board[i][j] = 0;
            }
        }
    }
    return board;
}

//adapt an array for rates instead of adding else ifs
function getNewTileValue(){
    var sample = Math.random();
    var numberRate = [0.0125, 0.1, 1];
    var toPopulate = numberRate.map(x => {return (sample < x)});
    for(let index = 0; index < toPopulate.length; index++){
        if(toPopulate[index] === true)
            return Math.pow(2, toPopulate.length - index)
    }
}

function move(board, direction){
    //0: up, 1: right, 2: down, 3: left
    var b;
    switch(direction){
        case 0:
            b = mergeBoardUp(board);
            break;
        case 1:
            b = mergeBoardRight(board);
            break;
        case 2:
            b = mergeBoardDown(board);
            break;
        case 3:
            b = mergeBoardLeft(board);
            break;
        default:
            b = board.map(x => x);
    }
    if(!compareArrayNumerical(board, b)){
        b = addNewTile(b);
    }
    return b;
}

function compareArrayNumerical(array1, array2){
    if(array1.length !== array2.length)
        return false;
    for(let i = 0; i < array1.length; i++){
        if(array1[i].length !== array2[i].length)
            return false
        for(let j = 0; j < array1[i].length; j++){
            if(array1[i][j] !== array2[i][j])
                return false;
        }
    }
    return true;
}

function addNewTile(board){
    var b = board.map(x => x);
    while(true){
        var randX = Math.floor(Math.random()*4);
        var randY = Math.floor(Math.random()*4);
        if(b[randX][randY] === 0){
            b[randX][randY] = getNewTileValue();
            return b;
        }
    }
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
    var d = rotateBoardLeft(c);
    return d;
}

function mergeBoardRight(board){
    var b = board.map(row => {
            var a = row.map(x => x);
    a = shiftRowRight(a);
    for(let i = a.length -1; i >= 0; i--){
        for(let j = i - 1; j >= 0; j--){
            if(a[j] && a[j] !== 0 && a[i] === a[j]){
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
return b;
}

function mergeBoardDown(board) {
    var b = rotateBoardLeft(board);
    var c = mergeBoardRight(b);
    var d = rotateBoardRight(c);
    return d;
}

function mergeBoardLeft (board){
    let b = board.map(row => {
            let a = row.map(x => x);
    a = shiftRowLeft(a);
    for(let i = 0; i < a.length; i++){
        for(let j = i + 1; j < a.length; j++){
            if(a[j] && a[j] !== 0 && a[i] === a[j]){
                a[i] *= 2;
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
return b;
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
    {filter: function distinctBoard(action, currentState, previousState){
        if(previousState === undefined){
            return true;
        }
        for(var i=0; i<currentState.length; i++){
            for(var j=0; j<currentState[i].length; j++){
                if(currentState[i][j] !== previousState[i][j])
                    return true;
            }
        }
        return false;
    }}
)

export default undoableBoard;