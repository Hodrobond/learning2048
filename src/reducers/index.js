/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import {combineReducers} from 'redux'
import App from './App'
import Board from './Board'
import Score from './Score'
import Solver from './Solver'

export default combineReducers({
    App,
    Board,
    Score,
    Solver
})
