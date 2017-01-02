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

export const tenHints = () => {
  return(dispatch, getState) => {
    for(let i=0; i<10; i++){
      let board = getState().Board.present;
      var type = Solver.getMove(board);
      handleMove({type: type})(dispatch, getState);      
    }
  }
}
