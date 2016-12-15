/**
 * Created by adam.kazberuk on 12/15/2016.
 */
import { ActionCreators as UndoActionCreators } from 'redux-undo'

export const undo = () => UndoActionCreators.undo()
export const redo = () => UndoActionCreators.redo()