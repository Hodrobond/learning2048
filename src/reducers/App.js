/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import undoable from 'redux-undo'

const defaultNotifications = {
      loss: false,
      victory: false,
      victoryAcknowledged: false
}

const init = () => {
 return defaultNotifications
}

const App = (state = 0, action) => {
  if(state === 0 || action === 'NEW_GAME'){
    return init();
  }
  let newNotifications;
  switch(action.type){
    case 'WIN_GAME':
      newNotifications = {...state,
                      victory: true}
      break;
    case 'LOSE_GAME':
      newNotifications = {...state,
                      loss: true}
      break;
    case 'CONTINUE_GAME':
      newNotifications = {...state,
                      victoryAcknowledged: true}
      break;
    case 'NEW_GAME':
      newNotifications = defaultNotifications;
      break;
    default:
      newNotifications = state;
      break;
  }

  return newNotifications;
}

const distinctAppFilter = (action, currentState, previousState) => {
  return true;
}

const undoableApp = undoable(App,
    {filter: distinctAppFilter}
)

export default undoableApp;
