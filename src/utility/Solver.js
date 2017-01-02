import Board from '../reducers/Board'
import {distinctBoard} from './Board'

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
  return count => 8;
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

export const getChainedValue = function(y, x, board, chainedBoard) {
  if (chainedBoard[y][x] > 0){
    return chainedBoard[y][x];
  }

  let value = 0;
  const tile = board[y][x];
  if ( tile != 0 ) {
    const adjacentTiles = getAdjacentTiles(board, y, x);
    for (let i in adjacentTiles) {
      let tile2 = adjacentTiles[i];
      let value2;
      if (tile == tile2.value * 2) {
        value2 = getChainedValue( tile2.y, tile2.x, board, chainedBoard );
      } else if (tile == tile2.value) {
        value2 = tile2.value * 2;
      } else if (tile == tile2.value * 4) {
        value2 = tile2.value;
      }
      if (value2 > value)
        value = value2;
    }
    value += tile;
  }
  chainedBoard[y][x] = value;
  return value;
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

//todo refactor
const isMergedBoard = (past, present) => {
  let countPast = 0;
  let countPresent = 0;
  for(let i=0; i<past.length; i++){
    for(let j=0; j<past[i].length; j++){
      if(past[i][j] !== 0)
        countPast++;
      if(present[i][j] !== 0)
        countPresent++;
    }
  }
  return countPresent < countPast;
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

const canHighestMoveToFarRight = (board) => {
  let highest = getHighest(board);
  if(highest.x === board.length)
    return false;
  for(let index = highest.x+1; index < board.length; index++){
    if(board[highest.y][index] !== 0){
      return false
    }
  }
  return true;
}
const canHighestMoveToFarTop = (board) => {
  let highest = getHighest(board);
  if(highest.y === 0)
    return false
  for(let index = highest.y+1; index < board.length; index++){
    if(board.index){
      if(board[index][highest.x] !== 0){
        return false
      }
    }
  }
  return true;
}

export const getDumbMove = (board) => {
		if (isTopRightEmpty(board)) {
      let row0Check = false;
      for(let qq =0; qq<board.length;qq++){
        if(board[0][qq] !== 0)
          row0Check = true
      }
			if ( row0Check )
        return 'MERGE_RIGHT'
		}
    const historyBoard = {
      past: [],
      present: board,
      future: []
    }
    const moveLeft = Board(historyBoard, {type:'MERGE_LEFT'}).present;
    const moveRight = Board(historyBoard, {type:'MERGE_RIGHT'}).present;
    const moveDown = Board(historyBoard, {type:'MERGE_DOWN'}).present;
    const moveUp = Board(historyBoard, {type:'MERGE_UP'}).present;

		if ( distinctBoard(board, moveUp) )
      return 'MERGE_UP';
    if ( distinctBoard(board, moveRight) )
      return 'MERGE_RIGHT';
    if ( distinctBoard(board, moveLeft) )
      return 'MERGE_LEFT';
    return 'MERGE_DOWN';
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
  const leftValue = (distinctBoard(board, moveLeft) && isMergedBoard(board, moveLeft))
                    ? getTotalChainedValue(moveLeft) : 0;
  const rightValue = (distinctBoard(board, moveRight) && isMergedBoard(board, moveRight))
                    ? getTotalChainedValue(moveRight) : 0;
  const downValue = (distinctBoard(board, moveDown) && isMergedBoard(board, moveDown))
                    ? getTotalChainedValue(moveDown) : 0;
  const upValue = (distinctBoard(board, moveUp) && isMergedBoard(board, moveUp))
                    ? getTotalChainedValue(moveUp) : 0;

  if(isTopRightEmpty(board)){
    if(distinctBoard(board, moveUp) && canHighestMoveToFarTop(board)){
      return 'MERGE_UP';
    }
    if(distinctBoard(board, moveRight) && canHighestMoveToFarRight(board)){
      return 'MERGE_RIGHT';
    }
    if(distinctBoard(board, moveUp)){
      return 'MERGE_UP'
    }
    if(distinctBoard(board, moveRight)){
      return 'MERGE_RIGHT';
    }
  }


  let direction = 'MERGE_UP';
  if(rightValue > upValue)
    direction = 'MERGE_RIGHT';
  if(leftValue > rightValue && leftValue > upValue)
    direction = "MERGE_LEFT";
  if(downValue > upValue && downValue > leftValue && downValue > rightValue)
    direction = 'MERGE_DOWN';

  if(direction == "MERGE_UP" && !distinctBoard(board, moveUp))
    direction = 'MERGE_RIGHT';
  if(direction == "MERGE_RIGHT" && !distinctBoard(board, moveRight))
    direction = 'MERGE_LEFT';
  if(direction == "MERGE_LEFT" && !distinctBoard(board, moveLeft))
    direction = 'MERGE_DOWN';

  return direction;
}


export const getMove = (board) => {
  if(isBoardHalfFull(board))
    return getChainMove(board);
  else
    return getDumbMove(board);
}
