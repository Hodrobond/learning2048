/**
 * Created by adam.kazberuk on 12/14/2016.
 */
export const handleMoveUp = () => {
  return(dispatch, getState) => {
    dispatch({type:'MERGE_UP'});
    console.log(getState);
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
