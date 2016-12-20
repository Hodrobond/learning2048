/**
 * Created by adam.kazberuk on 12/19/2016.
 */
import {distinctBoard, distinctBoardFilter} from './Board'

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
