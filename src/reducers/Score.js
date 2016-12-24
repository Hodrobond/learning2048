/*
 {
 currentScore: n,
 highScore: n
}
 */
const Score = (state = 0, action) => {
  if(state === 0){
    return{
      currentScore: 0,
      highScore: 0
    }    
  }

  switch(action.type){
    case 'SCORE_INCREMENT':
      return {
        ...state,
        currentScore: state.currentScore + action.value
      }
    case 'HIGH_SCORE_INCREMENT':
      return{
        currentScore: state.currentScore + action.value,
        highScore: state.currentScore + action.value
      }
    default:
      return state
  }
}

export default Score;
