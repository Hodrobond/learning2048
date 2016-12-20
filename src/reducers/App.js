/**
 * Created by adam.kazberuk on 12/6/2016.
 */
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
    init(0, action);
  }
  let gameWin = false//gameWon(newBoard.present);
  let gameLose = false//gameLost(newBoard);

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
                    Notifications: newNotifications};
  return newState;
}

export default App;
