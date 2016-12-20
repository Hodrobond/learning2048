/**
 * Created by adam.kazberuk on 12/15/2016.
 */
 export const getEmptyIndexes = (board) => {
   let indicies = [];
   let emptyCount = 0;
   for(let i=0; i<board.length;i++){
     for(let j=0;j<board[i].length;j++){
       if(board[i][j] === 0){
         indicies[emptyCount] = [i,j];
         emptyCount++;
       }
     }
   }
   return indicies;
 }

export const gameWon = (board) => {
 for(let i=0;i<board.length;i++){
   for(let j=0;j<board[i].length;j++){
     if(board[i][j] === 2048)
       return true;
   }
 }
 return false;
}

export const gameLost = (board) => {
 var indexes = getEmptyIndexes(board);
 if(indexes.length > 0)
   return false;
 for(let i=0;i<board.length;i++){
   for(let j=0;j<board[i].length;j++){
     let current = board[i][j];
     let right;
     let left;
     let up = board[i][j-1];
     let rightSide = board[i+1];
     if((!rightSide == null))
       right = board[i+1][j];
     let down = board[i][j+1];
     let leftSide = board[i-1];
     if(!(leftSide == null))
       left = board[i-1][j];

     if(current === up
     ||  current === right
     ||  current === down
     ||  current === left){
       return false;
     }
   }
 }
 return true;
}

export const distinctBoard = (currentState, previousState) => {
    if(previousState === 0)
      return true;
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
