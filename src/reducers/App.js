/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import undoable from 'redux-undo'
import {distinctBoardFilter} from '../utility/Board'

const defaultNotifications = {
      loss: false,
      victory: false,
      victoryAcknowledged: false
}

const init = (state, action) => {
 return {
         Notifications: defaultNotifications
       }
}

const App = (state = 0, action) => {
  if(state === 0 || action === 'NEW_GAME'){
    return init(0, action);
  }
  let newNotifications;
  switch(action.type){
    case 'WIN_GAME':
      newNotifications = {...state.Notifications,
                      victory: true}
      break;
    case 'LOSE_GAME':
      newNotifications = {...state.Notifications,
                      loss: true}
      break;
    case 'CONTINUE_GAME':
      newNotifications = {...state.Notifications,
                      victoryAcknowledged: true}
      break;
    case 'NEW_GAME':
      newNotifications = defaultNotifications;
      break;
    default:
      newNotifications = {...state.Notifications};
      break;
  }


//  const newNotifications = Notifications(state.Notifications, action);
  const newState = {...state,
                    Notifications: newNotifications};
  return newState;
}



const distinctAppFilter = (action, currentState, previousState) => {
  return true;
}

const undoableApp = undoable(App,
    {filter: distinctAppFilter}
)

export default undoableApp;
