/**
 * Created by adam.kazberuk on 12/14/2016.
 */
import {calculateScore, distinctBoard, getEmptyIndexes, gameWon, gameLost} from '../utility/Board'
import {increment, incrementHigh} from './Score'

const randomFromArray = (arr) => {
  return arr[Math.floor((Math.random() * arr.length))];
}

//numberRate contains percentages for 2^n appearing
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
    x: toFill[0],
    y: toFill[1],
    value: value
  }
}

export const initializeBoard = () => {
  return(dispatch, getState) =>{
    let board = getState().Board.present;
    let minTiles = 2;
    let maxTiles = 5;
    let numTiles = Math.floor(Math.random() * (maxTiles-minTiles+1))+minTiles;
    for(let i=0;i<numTiles;i++){
      dispatch(getNewTileDispatch(board));
    }
  }
}

export const handleMove = (moveType) => {
  return(dispatch, getState) => {
    //obtain initial state information
    let initialBoard = getState().Board.present;
    let score = getState().Score;
    dispatch(moveType);
    //perform post state logic
      //calculate scores
    let postBoard = getState().Board.present;
    let isVertical = false;
    if(moveType.type === "MERGE_UP" || moveType.type === "MERGE_DOWN"){
      isVertical = true;
    }
    let scoreValue = calculateScore(initialBoard, isVertical);
    let newScore = score.currentScore + scoreValue;
    if(scoreValue > 0){
      dispatch(increment(newScore));
      if(score.highScore < newScore)
        dispatch(incrementHigh(newScore));
    }
      //determine game win/loss state
    if(gameWon(postBoard))
      dispatch({type:'WIN_GAME'});
    else if(gameLost(postBoard))
      dispatch({type:'LOSE_GAME'})
    if(distinctBoard(initialBoard, postBoard) && getEmptyIndexes(postBoard).length > 0)
      dispatch(getNewTileDispatch(postBoard));
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

export const newGame = () => {
  return(dispatch, getState) => {
    dispatch({type: "NEW_GAME"});
    initializeBoard()(dispatch, getState);
  }
}
export const winGame = () => ({type: "WIN_GAME"})
export const loseGame = () => ({type: "LOSE_GAME"})
