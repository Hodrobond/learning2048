/**
 * Created by adam.kazberuk on 12/14/2016.
 */
import { ActionCreators as UndoActionCreators } from 'redux-undo'

export const moveRight = () => ({ type: "MOVE_RIGHT"})
export const moveDown = () => ({ type: "MOVE_DOWN"})
export const moveLeft = () => ({ type: "MOVE_LEFT"})
export const moveUp = () => ({ type: "MOVE_UP"})
export const newGame = () => ({ type: "NEW_GAME"})
export const winGame = () => ({ type: "WIN_GAME"})
export const loseGame = () => ({ type: "LOSE_GAME"})
export const undo = () => UndoActionCreators.undo()
export const redo = () => UndoActionCreators.redo()
