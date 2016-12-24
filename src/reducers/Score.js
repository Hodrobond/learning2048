/*
 {
 currentScore: n,
 highScore: n
}
 */
const init = () => {
  let highScore = localStorage.getItem( 'highScore' ) || 0;
  return {
    currentScore: 0,
    highScore: highScore
  }
}

const Score = (state = 0, action) => {
  if(state === 0){
    return init();
  }
  let newScore = state.currentScore + action.value;
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'SCORE_INCREMENT':
      return {
        ...state,
        currentScore: newScore
      }
    case 'HIGH_SCORE_INCREMENT':
      localStorage.setItem( 'highScore', newScore );
      return{
        currentScore: newScore,
        highScore: newScore
      }
    default:
      return state
  }
}

export default Score;
