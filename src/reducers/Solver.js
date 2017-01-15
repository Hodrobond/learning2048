/*
  {
    solving: true || false
  }
*/
const initState = () => {
  return {
    solving: false,
    hint: null
  }
}

const Solver = (state = 0, action) => {
    if(state === 0){
      return initState();
    }
    let newState;
    switch(action.type){
      case 'START_SOLVING':
        return newState = {
          ...state,
          solving: true
        }
      case 'STOP_SOLVING':
        return newState = {
          ...state,
          solving: false,
        }
      case 'HINT':
        return {
          ...state,
          hint: action.direction
        }
      case 'RESOLVE_HINT':
        return{
          ...state,
          hint: null
        }
      default:
        return state;
    }
}

export default Solver;
