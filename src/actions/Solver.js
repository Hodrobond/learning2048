import * as Solver from '../utility/Solver'
import {handleMove} from './Board'

let solveInterval;

export const solveGame = () => {
  return(dispatch, getState) => {
    dispatch({type: 'START_SOLVING'});
      solveInterval = setInterval(function(){
      let board = getState().Board.present;
      var type = Solver.getMove(board);
      handleMove({type: type})(dispatch, getState);
    }, 200);
  }
}

export const stopSolving = () => {
  return(dispatch, getState) => {
    dispatch({type: 'STOP_SOLVING'});
    clearInterval(solveInterval);
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
    for(let i=0; i<100; i++){
      let board = getState().Board.present;
      var type = Solver.getMove(board);
      handleMove({type: type})(dispatch, getState);
    }
  }
}
