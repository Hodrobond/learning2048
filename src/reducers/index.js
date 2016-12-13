/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import App from './App'
import Board from './Board'
import Notifications from './Notifications'

export default combineReducers({
    App,
    Board,
    Notifications
})