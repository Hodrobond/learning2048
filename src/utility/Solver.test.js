import * as Solver from './Solver'

const emptyBoard = [[0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];

it('rowFilledAmount - empty', () => {
  const row = [0,0,0,0];
  expect(Solver.rowFilledAmount(row)).toEqual(0);
})

it('rowFilledAmount - partial', () => {
  const row = [0,2,1024,0];
  expect(Solver.rowFilledAmount(row)).toEqual(2);
})

it('rowFilledAmount - full', () => {
  const row = [2,2,4,4];
  expect(Solver.rowFilledAmount(row)).toEqual(4);
})

it('isRowOrdered - true', () => {
  const row = [0,2,4,8];
  expect(Solver.isRowOrdered(row)).toEqual(true);
})

it('isRowOrdered - false', () => {
  const row = [0,2,4,2];
  expect(Solver.isRowOrdered(row)).toEqual(false);
})

it('getColumn', () => {
  const board = [[0,2,2,2],
                [2,0,0,2],
                [0,2,0,4],
                [8,16,32,64]];
  expect(Solver.getColumn(board, 0)).toEqual([0,2,0,8]);
  expect(Solver.getColumn(board, 1)).toEqual([2,0,2,16]);
  expect(Solver.getColumn(board, 2)).toEqual([2,0,0,32]);
  expect(Solver.getColumn(board, 3)).toEqual([2,2,4,64]);
})

it('isTopRightEmpty - true', () => {
  const board = [[2,2,2,0],
                [2,2,2,2],
                [2,2,2,2],
                [2,2,2,2]];
  expect(Solver.isTopRightEmpty(board)).toEqual(true);
})

it('isTopRightEmpty - false', () => {
  const board = [[0,0,0,2],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
  expect(Solver.isTopRightEmpty(board)).toEqual(false);
})

it('getAdjacentTiles', () => {
  const board = [[2,4,8,16],
                [32,64,128,256],
                [512,1024,2048,4096],
                [8192,16384, 32768, 65536]];
  const solution = [{
      value: 8,
      x: 2,
      y: 0
    },{
      value: 256,
      x: 3,
      y: 1
    },{
      value: 2048,
      x: 2,
      y: 2
    },{
      value: 64,
      x: 1,
      y: 1
    }];
  expect(Solver.getAdjacentTiles(board, 1, 2)).toEqual(solution);
})

it('getAdjacentTiles - corner', () => {
  const board = [[2,4,8,16],
                [32,64,128,256],
                [512,1024,2048,4096],
                [8192,16384, 32768, 65536]];
  const solution = [{
      value: 4,
      x: 1,
      y: 0
    },{
      value: 32,
      x: 0,
      y: 1
    }];
  expect(Solver.getAdjacentTiles(board, 0,0)).toEqual(solution);
})

it('getAdjacentTiles - with empty', () => {
  const board = [[0,0,0,8],
                [0,0,0,4],
                [0,0,0,2],
                [0,0,0,2]];
  const solution = [{
    value: 4,
    x: 3,
    y: 1
  },
  {
    value: 2,
    x: 3,
    y: 3
  }];
  expect(Solver.getAdjacentTiles(board, 2, 3)).toEqual(solution);
})

it('getChainedValue 1', () => {
  const board = [[2,2,2,2],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
  const emptyBoard = [[0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.getChainedValue(0, 3, board, emptyBoard)).toEqual(6);
})

it('getChainedValue 2', () => {
  const board = [[2,2,4,8],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
  const emptyBoard = [[0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.getChainedValue(0, 3, board, emptyBoard)).toEqual(18);
})

it('getChainedValue 3', () => {
  const board = [[0,0,0,8],
                [0,0,0,4],
                [0,0,0,2],
                [0,0,0,2]];
  const emptyBoard = [[0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.getChainedValue(0, 3, board, emptyBoard)).toEqual(18);
})

it('getChainedValue 4', () => {
  const board = [[2,2,4,8],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
  const emptyBoard = [[0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.getChainedValue(0, 3, board, emptyBoard)).toEqual(18);
})

it('getChainedBoard', () => {
  const board = [[0,0,0,8],
                [0,0,0,4],
                [0,0,0,2],
                [0,0,0,2]];
  const solution = [[0, 0, 0, 18],
                    [0, 0, 0, 10],
                    [0, 0, 0, 6],
                    [0, 0, 0, 6]];
  expect(Solver.getChainedBoard(board)).toEqual(solution);
})


it('getTotalChainedValue', () => {
  const board = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [2,2,4,8]];
  const solution = 40; //18 + 10 + 6 + 6, similar to above test
  expect(Solver.getTotalChainedValue(board)).toEqual(solution);
})

it('canHighestMoveToFarRight - true', () => {
  const testBoard = [[1024,0,0,0],
                      [4,4,4,4],
                      [2,2,2,2],
                      [8,16,32,64]];
  expect(Solver.canHighestMoveToFarRight(testBoard)).toBe(true);
})

it('canHighestMoveToFarRight - false', () => {
  const testBoard = [[1024,2,0,0],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.canHighestMoveToFarTop(testBoard)).toBe(false);
})

it('canHighestMoveToFarTop - true', () => {
  const testBoard = [[2,2,2,0],
                      [4,4,4,0],
                      [8,8,8,0],
                      [16,32,64,1024]];
  expect(Solver.canHighestMoveToFarTop(testBoard)).toBe(true);
})

it('canHighestMoveToFarTop - false', () => {
  const testBoard = [[0,0,0,2],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,2048]];
  expect(Solver.canHighestMoveToFarTop(testBoard)).toBe(false);
})

it('canMergeAboveValue - 1', () => {
  const testBoard = [[2,2,16,2],
                      [2,2,16,2],
                      [2,2,2,2],
                      [2,2,2,2]];
  const solution = {
    direction: 'MERGE_UP',
    highestMerged: 16
  };
  expect(Solver.canMergeAboveValue(8, testBoard)).toEqual(solution)
})

it('canMergeAboveValue - 2', () => {
  const testBoard = [[2,2,16,2],
                      [2,2,2,2],
                      [2,2,16,2],
                      [2,2,2,2]];
  const solution = {
    direction: 'MERGE_UP',
    highestMerged: 0
  };
  expect(Solver.canMergeAboveValue(8, testBoard)).toEqual(solution)
})

it('canMergeAboveValue - 3', () => {
  const testBoard = [[2,2,16,16],
                      [2,2,2,2],
                      [2,2,16,2],
                      [2,2,2,2]];
  const solution = {
    direction: 'MERGE_RIGHT',
    highestMerged: 16
  };
  expect(Solver.canMergeAboveValue(8, testBoard)).toEqual(solution)
})

it('canMergeAboveValue - depth 1', () => {
  const testBoard = [[8,16,64,128],
                      [2,2,4,64],
                      [2,0,4,4],
                      [0,0,0,2]];
  const solution = {
    direction: 'MERGE_LEFT',
    highestMerged: 64
  };
  expect(Solver.canMergeAboveValue(16, testBoard, 2)).toEqual(solution);
})

it('canMergeAboveValue - depth 2', () => {
  const testBoard = [[2,2,2,2],
                      [0,0,0,8],
                      [0,0,0,0],
                      [0,0,0,0]];
  const solution = {
    direction: 'MERGE_RIGHT',
    highestMerged: 8
  };
  expect(Solver.canMergeAboveValue(8, testBoard, 3)).toEqual(solution);
})

it('canMergeAboveValue - depth 3', () => {
  const testBoard = [[0,0,16,16],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  const solution = {
    direction: 'MERGE_RIGHT',
    highestMerged: 16
  };
  expect(Solver.canMergeAboveValue(8, testBoard, 3)).toEqual(solution);
})

it('canMergeAboveValue - depth 4', () => {
  const testBoard = [[2,8,16,16],
                      [4,0,0,2],
                      [0,0,0,4],
                      [0,0,0,0]];
  const solution = {
    direction: 'MERGE_RIGHT',
    highestMerged: 16
  };
  expect(Solver.canMergeAboveValue(8, testBoard, 2)).toEqual(solution);
})


it('isRowEclectic - true', () => {
  const testBoard = [[2,4,8,16],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.isRowEclectic(testBoard[0])).toEqual(true);
})

it('isRowEclectic - false ', () => {
  const testBoard = [[2,2,8,16],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.isRowEclectic(testBoard[0])).toEqual(false);
})

it('isRowEclectic - 0 false', () => {
  const testBoard = [[0,2,8,16],
                      [0,0,0,0],
                      [0,0,0,0],
                      [0,0,0,0]];
  expect(Solver.isRowEclectic(testBoard[0])).toEqual(false);
})
