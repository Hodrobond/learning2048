/**
 * Created by adam.kazberuk on 12/6/2016.
 */
 import Board from './Board'
 import Notifications from './Notifications'

export default (state = 0, action) => {
  const newBoard = Board(state.Board, action);
  const newNotifications = Notifications(state.Notifications, action);
  const newState = {...state,
                    Board: newBoard,
                    Notifications: newNotifications};
  return newState;
}
