import Board from '../reducers/Board'
import {calculateMerged, calculateScore, distinctBoard, gameLost} from './Board'

export const rowFilledAmount = (row) => {
  let count = 0;
  for(let i=0; i<row.length; i++){
    if(row[i] !== 0)
      count++;
  }
  return count;
}

export const isRowOrdered = (row) => {
  //to the right
  let highestValue = 0;
  let ordered = true;
  for(let i=0; i<row.length; i++){
    if(row[i] < highestValue)
      ordered = false;
    if(row[i] > highestValue)
      highestValue = row[i];
  }
  return ordered;
}

export const isRowEclectic = (row) => {
  for(let i=0;i<row.length;i++)
    for(let j=0;j<row.length;j++)
      if(row[i] === row[j] && row[i] !== 0 && row[j] !== 0 && (i !== j)){
        return false;
      }
  return true;
}

export const getColumn = (board, i) => board.map(x => x[i]);

export const isTopRightEmpty = (board) => board[0][board.length-1] === 0;

export const isBoardHalfFull = (board) => {
  let count = 0;
  for(let i=0; i<board.length;i++){
    for(let j=0;j<board.length;j++){
      if(board[i][j] !== 0)
        count++;
    }
  }
  return count >= 8;
}

export const isBoardMostlyFull = (board) => {
  let count = 0;
  for(let i=0; i<board.length;i++){
    for(let j=0;j<board.length;j++){
      if(board[i][j] !== 0)
        count++;
    }
  }
  return count >= 12;
}

export const getAdjacentTiles = (grid, y, x) => {
  let tiles = [];
  const shift = [[-1,0], [0,1], [1,0], [0,-1]];

  for (let i in shift) {
    let posShift = shift[i];
    let x2 = x + posShift[1];
    let y2 = y + posShift[0];
    if ( x2 >=0 && x2 < 4 && y2 >=0 && y2 < 4 ) {
      let tile = grid[y2][x2];
      if (tile !== 0) tiles.push({
        value: tile,
        x: x2,
        y: y2
      });
    }
  }
  return tiles;
}

export const getChainedValue = function(y, x, board, chainedBoard) {
  if (chainedBoard[y][x] > 0){
    return chainedBoard[y][x];
  }

  let value = 0;
  const tile = board[y][x];
  if ( tile !== 0 ) {
    const adjacentTiles = getAdjacentTiles(board, y, x);
    for (let i in adjacentTiles) {
      let tile2 = adjacentTiles[i];
      let value2;
      if (tile === tile2.value * 2) {
        value2 = getChainedValue( tile2.y, tile2.x, board, chainedBoard );
      } else if (tile === tile2.value) {
        value2 = tile2.value * 2;
      }/* else if (tile === tile2.value * 4) {
        value2 = tile2.value;
      }*/
      else if (tile < tile2.value/8){
        value -= tile2.value;
      }
      if (value2 > value)
        value = value2;
    }
    value += tile;
  }
  chainedBoard[y][x] = value;
  return value;
}

export const getChainedBoard = (board) => {
  let chainedBoard = [];
  for (let x=0; x<4; x++) {
    chainedBoard[x] = [];
    for (let y=0; y<4; y++) {
      chainedBoard[x][y] = 0;
    }
  }
  for (let i=0; i<4; i++) {
    for (let j=3; j>=0; j--) {
      let chainVal = getChainedValue( j, i, board, chainedBoard );
      chainedBoard[j][i] = chainVal;
    }
  }
  return chainedBoard;
}

export const getTotalChainedValue = (initialBoard) => {
  const board = getChainedBoard( initialBoard );
  let value = 0;
   for (let x=0; x<4; x++) {
    for (let y=0; y<4; y++) {
      value += board[x][y];
    }
  }
  return value;
}

const getHighest = (board) => {
  let highest = {
    value: 0,
    x: 0,
    y: 0
  }
  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      if(board[i][j] > highest.value){
        highest.value = board[i][j];
        highest.y=i;
        highest.x=j;
      }
    }
  }
  return highest;
}

export const canHighestMoveToFarRight = (board) => {
  let highest = getHighest(board);
  if(highest.x === (board.length -1))
    return false;
  if(highest.x === board.length)
    return false;
  if(highest.x >= (board.length+1))
    return false
  for(let index = highest.x+1; index < board.length; index++){
    if(board[highest.y][index] !== 0 && board[highest.y][index] !== highest.value){
      return false
    }
  }
  return true;
}
export const canHighestMoveToFarTop = (board) => {
  let highest = getHighest(board);
  if(highest.y === 0)
    return false
  if(highest.y >= (board.length+1))
    return false;
  for(let index = highest.y-1; index >= 0; index--){
    if(board[index] != null){
      if(board[index][highest.x] !== 0 && board[index][highest.x] !== highest.value){
        return false
      }
    }
  }
  return true;
}

export const getDumbMove = (board) => {
  const mergeTest = canMergeAboveValue(16, board, 2);
  if(mergeTest && mergeTest.highestMerged > 0){
    return mergeTest.direction;
  }

  const historyBoard = {
    past: [],
    present: board,
    future: []
  }
  const moveLeft = Board(historyBoard, {type:'MERGE_LEFT'}).present;
  const moveRight = Board(historyBoard, {type:'MERGE_RIGHT'}).present;
  const moveUp = Board(historyBoard, {type:'MERGE_UP'}).present;

  if ( distinctBoard(board, moveUp) )
    return 'MERGE_UP';
  if ( distinctBoard(board, moveRight) )
    return 'MERGE_RIGHT';
  if ( distinctBoard(board, moveLeft) )
    return 'MERGE_LEFT';
  return 'MERGE_DOWN';

}

const canAvoidDown = (board) => {
  for(let i=0;i<board.length;i++){
    let count = 0;
    for(let j=0; j<board[i].length;j++){
      if(board[i][j] !== 0)
        count++
      if(count === 1 || count === 2 || count === 3)
        return count
    }
  }
  return false;
}

export const canMergeAboveValue = (minValue, board, depth) => {
  depth = depth || 1;
  let highestMerged = 0;
  let direction;
  const historyBoard = {
    past: [],
    present: board,
    future: []
  }

  for(let x=board.length-1; x>=0; x--){
    for(let y=0; y<board[x].length; y++){
      if(board[y][x] >= minValue){
        let adjacentTiles = getAdjacentTiles(board, y, x);
        let tile = board[y][x];
        for (let i in adjacentTiles) {
          let tile2 = adjacentTiles[i];
          if (tile === tile2.value && tile > highestMerged) {
            if(y > tile2.y){
              direction = 'MERGE_DOWN';
              highestMerged = tile;
            }
            else if(x > tile2.x){
              direction = 'MERGE_RIGHT';
              highestMerged = tile;
            }
            else if(x < tile2.x){
              direction = 'MERGE_LEFT';
              highestMerged = tile;
            }
            else{
              direction = 'MERGE_UP'
              highestMerged = tile;
            }
          }
          if(depth > 1){
            let moves = [{type:'MERGE_UP'},{type:'MERGE_RIGHT'},{type:'MERGE_LEFT'},{type:'MERGE_DOWN'}]
            for(let j in moves){
              let newMove = Board(historyBoard, moves[j]).present;
              let newMergeVal = canMergeAboveValue(minValue, newMove, depth-1);
              if(newMergeVal.highestMerged > highestMerged){
                highestMerged = newMergeVal.highestMerged;
                direction = moves[j].type;
              }
            }
          }
        }
      }//if tile > minValue
    }
  }
  return {highestMerged, direction};
}

export const getChainMove = (board) => {
  const historyBoard = {
    past: [],
    present: board,
    future: []
  }

  const moveLeft = Board(historyBoard, {type:'MERGE_LEFT'}).present;
  const moveRight = Board(historyBoard, {type:'MERGE_RIGHT'}).present;
  const moveDown = Board(historyBoard, {type:'MERGE_DOWN'}).present;
  const moveUp = Board(historyBoard, {type:'MERGE_UP'}).present;

  const leftValue = getTotalChainedValue(moveLeft);
  const rightValue = getTotalChainedValue(moveRight);
  const downValue = getTotalChainedValue(moveDown);
  const upValue = getTotalChainedValue(moveUp);

  const isUpDistinct = distinctBoard(board, moveUp);
  const isRightDistinct = distinctBoard(board, moveRight);
  const isLeftDistinct = distinctBoard(board, moveLeft);
  const isDownDistinct = distinctBoard(board, moveDown);

/*  const leftValue = (distinctBoard(board, moveLeft) && isMergedBoard(board, moveLeft))
                    ? getTotalChainedValue(moveLeft) : 0;
  const rightValue = (distinctBoard(board, moveRight) && isMergedBoard(board, moveRight))
                    ? getTotalChainedValue(moveRight) : 0;
  const downValue = (distinctBoard(board, moveDown) && isMergedBoard(board, moveDown))
                    ? getTotalChainedValue(moveDown) : 0;
  const upValue = (distinctBoard(board, moveUp) && isMergedBoard(board, moveUp))
                    ? getTotalChainedValue(moveUp) : 0;*/
  let direction = 'MERGE_UP';
  let highest = upValue;
  if( (rightValue > upValue) && isRightDistinct){
    direction = 'MERGE_RIGHT';
    highest = rightValue;
  }
  if( (leftValue > rightValue) && (leftValue > upValue) && isLeftDistinct){
    direction = "MERGE_LEFT";
    highest = leftValue;
  }
  if( (downValue > upValue) && (downValue > leftValue) && (downValue > rightValue) && isDownDistinct ){
    direction = 'MERGE_DOWN';
    highest = downValue;
  }

  const avoidDown = canAvoidDown(board) || isUpDistinct;
  if(direction === 'MERGE_DOWN' && avoidDown){
    direction = 'MERGE_UP';
    highest = upValue;
    if( (rightValue > upValue) && isRightDistinct){
      direction = 'MERGE_RIGHT';
      highest = rightValue;
    }
    if( (leftValue > rightValue) && (leftValue > upValue) && isLeftDistinct){
      direction = "MERGE_LEFT";
      highest = leftValue;
    }
  }

  if(direction === "MERGE_UP" && !isUpDistinct){
    direction = 'MERGE_RIGHT';
    highest = rightValue;
  }
  if(direction === "MERGE_RIGHT" && !isRightDistinct){
    direction = 'MERGE_LEFT';
    highest = leftValue;
  }
  if(direction === "MERGE_LEFT" && !isLeftDistinct){
    direction = 'MERGE_DOWN';
    highest = downValue;
  }

  return {
    direction: direction,
    score: highest
  };
}

export const getReactMove = (boardA, depth, attempts, criteria) => {
  let board = new Array(boardA.length);
  for(let y=0; y<boardA.length;y++){
    board[y] = new Array(boardA[y].length);
    for(let x=0; x< boardA[y].length; x++){
      board[y][x] = boardA[y][x];
    }
  }
  const historyBoard = {
    past: [],
    present: board,
    future: []
  }
  let bestCollection = [];
  for(let attemptIndex = 0; attemptIndex < attempts; attemptIndex++){
    let best = {};
    let moves = [{type:'MERGE_UP'},{type:'MERGE_RIGHT'},{type:'MERGE_LEFT'},{type:'MERGE_DOWN'}]
    for(let j in moves){
      let scoreValue = 0;
      let newBoard = Board(historyBoard, moves[j]).present;
      let lost = gameLost(newBoard);
      moves[j].isDistinct = distinctBoard(newBoard, board);
      switch(criteria){
        case 'chain':
          scoreValue = getTotalChainedValue(newBoard, (moves[j].type === 'MERGE_UP'
                                                      || moves[j].type === 'MERGE_DOWN'));
          break;
        case 'merge':
          scoreValue = calculateMerged(board, newBoard);
          break;
        case 'score':
        default:
          scoreValue = calculateScore(board, (moves[j] === 'MERGE_UP' || moves[j] === 'MERGE_DOWN'));
          break;
      }
      if(scoreValue > best.score && moves[j].isDistinct === true && !lost){
        if(depth > 0){
          best.move = moves[j];
          let newScore = getReactMove(newBoard, depth - 1, 1, criteria).score;
          if(newScore > best.score){
            best.score = newScore;
          }
        }
      }

      if(best.move == null && moves[j].isDistinct){
        best.move = moves[j];
        best.score = scoreValue;
      }
    }
    switch(criteria){
      case 'merge':
        break;
      case 'chain':
      case 'score':
      default:
        const isEclectic = isRowEclectic(board[0]);
        if(best.move && best.move.type === 'MERGE_LEFT' && !isEclectic){
          if(moves[0].isDistinct)
            best.move = moves[0];
          else if(moves[1].isDistinct)
           best.move = moves[1];
        }
        break;
    }
    if(best.move && best.move.type === 'MERGE_DOWN'){
      const avoidDown = canAvoidDown(board);
      if(avoidDown){
        for(let i in moves){
          if(moves[i].isDistinct){
            best.move = moves[i];
            break;
          }
        }
      }
    }
    const mergeTest = canMergeAboveValue(16, board, 2);
    if(mergeTest.highestMerged > 0){
      best.move = {type: mergeTest.direction};
      best.score = mergeTest.highestMerged;
    }
    bestCollection.push({
      move: best.move,
      score: best.score
    });
  }
  let count = {
    MERGE_UP: 0,
    MERGE_RIGHT: 0,
    MERGE_LEFT: 0,
    MERGE_DOWN: 0
  };
  let score = {
    MERGE_UP: 0,
    MERGE_RIGHT: 0,
    MERGE_LEFT: 0,
    MERGE_DOWN: 0
  };
  let highestMove = {
    count: 0
  };
  for(let c=0; c<bestCollection.length; c++){
    count[bestCollection[c].move.type]++;
    score[bestCollection[c].move.type] = bestCollection[c].move.score;
    if(count[bestCollection[c].move.type] > highestMove.count){
      highestMove = bestCollection[c];
      highestMove.count = count[bestCollection[c].move.type];
    }
  }
  return highestMove;
}

export const getMove = (board) => {
  if(isTopRightEmpty(board)){
    const historyBoard = {
      past: [],
      present: board,
      future: []
    }
    const moveRight = Board(historyBoard, {type:'MERGE_RIGHT'}).present;
    const moveUp = Board(historyBoard, {type:'MERGE_UP'}).present;

    if(distinctBoard(board, moveRight) && canHighestMoveToFarRight(board)){
      return 'MERGE_RIGHT';
    }
    if(distinctBoard(board, moveUp) && canHighestMoveToFarTop(board)){
      return 'MERGE_UP';
    }
    if(distinctBoard(board, moveUp)){
      return 'MERGE_UP';
    }
    if(distinctBoard(board, moveRight)){
      return 'MERGE_RIGHT';
    }
  }

  let move;
  let isHalfFull = isBoardHalfFull(board);
  let isMostlyFull = isBoardMostlyFull(board);

  if(isMostlyFull){
    let reactMove = getReactMove(board, 6, 3, 'chain');
    move = reactMove.move.type;
  }
  else if(isHalfFull){
//    move = getSmartMove(board, 3);
//    move = chainMove.direction;
    let reactMove = getReactMove(board, 4, 3, 'chain');
    move = reactMove.move.type;
  }
  else{
    move = getDumbMove(board);
  }


  return move;
}
