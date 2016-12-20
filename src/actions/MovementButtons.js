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

export const handleMoveUp = () => {
  return(dispatch, getState) => {
    let initial = getState().Board.present;
    dispatch({type:'MERGE_UP'});
    let post = getState().Board.present;
    if(distinctBoard(initial, post)){
      //add tile
      var indicies = getEmptyIndexes(post);
      var toFill = randomFromArray(indicies);
      var value = getNewTileValue();
      dispatch({
        type:'ADD_TILE',
        index: toFill,
        value: value
      })
    }


  }
}

export const handleMoveRight = () => {
  return(dispatch, getState) => {
    dispatch({type:'MERGE_RIGHT'})
  }
}

export const handleMoveDown = () => {
  return(dispatch, getState) => {
    dispatch({type:'MERGE_DOWN'});
  }
}

export const handleMoveLeft = () => {
  return(dispatch,getState) => {
    dispatch({type:'MERGE_LEFT'});
  }
}

export const newGame = () => ({ type: "NEW_GAME"})
export const winGame = () => ({ type: "WIN_GAME"})
export const loseGame = () => ({ type: "LOSE_GAME"})
