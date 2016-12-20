/**
 * Created by adam.kazberuk on 12/19/2016.
 */
import {distinctBoard, distinctBoardFilter, getEmptyIndexes} from './Board'

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
