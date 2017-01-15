/*
  {
    solving: true || false
  }
*/
const initState = () => {
  return {
    solving: false
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
          solving: false
        }
      default:
        return state;
    }
}

export default Solver;
