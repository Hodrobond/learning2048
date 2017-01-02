import * as Solver from '../utility/Solver'
import {handleMove} from './Board'

export const getMove = () => {
  return(dispatch, getState) => {
    setInterval(function(){
      let board = getState().Board.present;
      var type = Solver.getMove(board);
      handleMove({type: type})(dispatch, getState);
    }, 500);
  }
}



export const hintMove = () => {
  return(dispatch, getState) => {
    let board = getState().Board.present;
    var type = Solver.getMove(board);
    handleMove({type: type})(dispatch, getState);
  }
}
