/**
 * Created by adam.kazberuk on 12/19/2016.
 */
import {calculateRow, calculateScore, distinctBoard, distinctBoardFilter, getEmptyIndexes} from './Board'

it('calculateRow - simple', () => {
  var row = [0,0,2,2];
  var solution = 4;
  expect(calculateRow(row)).toBe(4);
})

it('calculateRow - gap', () => {
  let row = [2,0,2,0];
  let solution = 4;
  expect(calculateRow(row)).toBe(4);
})

it('calculateRow - fullRow', () => {
  let row = [2,2,2,2];
  let solution = 8;
  expect(calculateRow(row)).toBe(8);
})

it('calculateScore - right simple', () => {
  let board = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,2,2]];
  let solution = 4;
  expect(calculateScore(board, false)).toBe(solution);
})

it('calculateScore - up simple', () => {
  let board = [[0,0,0,0],
                [0,0,0,0],
                [0,0,2,0],
                [0,0,2,0]];
  let solution = 4;
  expect(calculateScore(board, true)).toBe(solution);
})

it("different distinct return true", () => {
    var arr1 = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
    var arr2 = [[1,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
    expect(distinctBoard(arr1, arr2)).toBe(true);
});

it("same distinct return false", () => {
    var arr1 = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
    var arr2 = [[0,0,0,0],
                [0,0,0,0],
                [0,0,0,0],
                [0,0,0,0]];
    expect(distinctBoard(arr1, arr2)).toBe(false);
});

it('getEmptyIndexes - 1', () => {
  let test = [[1,0,2,0],
              [0,3,4,5],
              [0,0,0,0],
              [1,1,1,1]];
  let solution = [[0,1],[0,3],[1,0],[2,0],[2,1],[2,2],[2,3]];
  const emptyCollection = getEmptyIndexes(test);
  expect(emptyCollection).toEqual(solution);
});

it('getEmptyIndexes - None empty', () => {
  let test = [[1,1,1,1],
              [1,1,1,1],
              [1,1,1,1],
              [1,1,1,1]];
  let solution = [];
  const emptyCollection = getEmptyIndexes(test);
  expect(emptyCollection).toEqual(solution);
})
