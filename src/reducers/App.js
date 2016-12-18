/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import Board from './Board'

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

}

const gameLost = (board) => {

}

const App = (state = 0, action) => {
  if(state === 0 || action === 'NEW_GAME'){
    init(0, action);
  }
  const newBoard = Board(state.Board, action);

  let newNotifications;
  switch(action.type){
    case 'CONTINUE_GAME':
      newNotifications = {...state.notifications,
                      victoryAcknowledged: true}
      break;
    case 'NEW_GAME':
      newNotifications = defaultNotifications;
      break;
    case 'LOSE_GAME':
      newNotifications = {...state.notifications,
                          loss: true};
      break;
    case 'WIN_GAME':
      newNotifications = {...state.notifications,
                        victory: true};
      break;
    default:
      newNotifications = {...state.notifications};
      break;
  }

//  const newNotifications = Notifications(state.Notifications, action);
  const newState = {...state,
                    Board: newBoard,
                    Notifications: newNotifications};
  return newState;
}

export default App;
