/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import Board from './Board'
import {distinctBoard} from '../utility/Board'
import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft} from '../actions/MovementButtons'

const defaultNotifications = {
      loss: false,
      victory: false,
      victoryAcknowledged: false
}

const init = (state, action) => {
 return {
         Board: Board(state,action),
         Notifications: defaultNotifications
       }
}

const gameWon = (board) => {
    console.log(board);
    for(let i=0; i < board.length; i++){
      for(let j=0; j < board[i].length; j++){
        if(board[i][j] === 2048)
          return true;
      }
    }
    return false;
}

const gameLost = (board) => {
  const upBoard = Board(board, handleMoveUp());
  const rightBoard = Board(board, handleMoveRight());
  const downBoard = Board(board, handleMoveDown());
  const leftBoard = Board(board, handleMoveLeft());
  if(!distinctBoard(upBoard.present, rightBoard.present) &&
      !distinctBoard(upBoard.present, downBoard.present) &&
      !distinctBoard(upBoard.present, leftBoard.present)){
        return true;
      }
  return false;
}

const App = (state = 0, action) => {
  if(state === 0 || action === 'NEW_GAME'){
    init(0, action);
  }
  const newBoard = Board(state.Board, action);

  let gameWin = gameWon(newBoard.present);
  let gameLose = gameLost(newBoard);

  let newNotifications;
  if(gameLose){
    newNotifications = {...state.notifications,
                        loss: true};
  }
  else if(gameWin){
    newNotifications = {...state.notifications,
                      victory: true};
  }
  else{
    switch(action.type){
      case 'CONTINUE_GAME':
        newNotifications = {...state.notifications,
                        victoryAcknowledged: true}
        break;
      case 'NEW_GAME':
        newNotifications = defaultNotifications;
        break;
      default:
        newNotifications = {...state.notifications};
        break;
    }
  }


//  const newNotifications = Notifications(state.Notifications, action);
  const newState = {...state,
                    Board: newBoard,
                    Notifications: newNotifications};
  return newState;
}

export default App;
