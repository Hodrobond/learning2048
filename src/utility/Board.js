/**
 * Created by adam.kazberuk on 12/15/2016.
 */
export const distinctBoard = (currentState, previousState) => {
    if(previousState === undefined){
        return true;
    }
    for(var i=0; i<currentState.length; i++){
        for(var j=0; j<currentState[i].length; j++){
            if(currentState[i][j] !== previousState[i][j])
                return true;
        }
    }
    return false;
}

export const distinctBoardFilter = (action, currentState, previousState) => {
    return distinctBoard(currentState, previousState);
}