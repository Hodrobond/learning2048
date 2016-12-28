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
  switch(action.type){
    case 'NEW_GAME':
      return init();
    case 'SCORE_INCREMENT':
      return {
        ...state,
        currentScore: action.value
      }
    case 'HIGH_SCORE_INCREMENT':
      localStorage.setItem( 'highScore', action.value );
      return{
        currentScore: action.value,
        highScore: action.value
      }
    default:
      return state
  }
}

export default Score;
