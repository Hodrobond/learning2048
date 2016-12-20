/**
 * Created by adam.kazberuk on 12/14/2016.
 */
import {distinctBoard, getEmptyIndexes} from '../utility/Board'

const randomFromArray = (arr) => {
  return arr[Math.floor((Math.random() * arr.length))];
}

const getNewTileValue = () => {
    var sample = Math.random();
    var numberRate = [0.0125, 0.1, 1];
    var toPopulate = numberRate.map(x => {return (sample < x)});
    for(let index = 0; index < toPopulate.length; index++){
        if(toPopulate[index] === true)
            return Math.pow(2, toPopulate.length - index)
    }
}

const getNewTileDispatch = (board) => {
  var indicies = getEmptyIndexes(board);
  var toFill = randomFromArray(indicies);
  var value = getNewTileValue();
  return {
    type: 'ADD_TILE',
    index: toFill,
    value: value
  }
}

const handleMove = (moveType) => {
  return(dispatch, getState) => {
    var initial = getState().Board.present;
    dispatch(moveType);
    var post = getState().Board.present;
    if(distinctBoard(initial, post)){
      dispatch(getNewTileDispatch(post));
    }//if(distinctBoard(initial, post))
  }
}

export const handleMoveUp = () => {
  return(dispatch, getState) => {
    handleMove({type:'MERGE_UP'})(dispatch, getState);
  }//return(dispatch, getState)
}

export const handleMoveRight = () => {
  return(dispatch, getState) => {
    handleMove({type:'MERGE_RIGHT'})(dispatch, getState);
  }
}

export const handleMoveDown = () => {
  return(dispatch, getState) => {
    handleMove({type:'MERGE_DOWN'})(dispatch, getState);
  }
}

export const handleMoveLeft = () => {
  return(dispatch,getState) => {
    handleMove({type:'MERGE_LEFT'})(dispatch, getState);
  }
}

export const newGame = () => ({ type: "NEW_GAME"})
export const winGame = () => ({ type: "WIN_GAME"})
export const loseGame = () => ({ type: "LOSE_GAME"})
