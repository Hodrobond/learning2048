/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import App from './App'
import Board from './Board'
import VictoryNotification from './VictoryNotification'

export default combineReducers({
    App,
    Board,
    VictoryNotification
})