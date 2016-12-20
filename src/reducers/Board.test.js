import Board from './Board'

it('RotateRight', () => {
  let sampleBoard = {
    past: [],
    present:  [[0,1,2,3],
                [4,5,6,7],
                [8,9,10,11],
                [12,13,14,15]],
    future: []
  }
  let solution = [[12,8,4,0],
                  [13,9,5,1],
                  [14,10,6,2],
                  [15,11,7,3]]
  const rotated = Board(sampleBoard, {type:'ROTATE_RIGHT'});
  expect(rotated.present).toEqual(solution)
})

it('RotateLeft', () => {
  let sampleBoard = {
    past: [],
    present:  [[0,1,2,3],
                [4,5,6,7],
                [8,9,10,11],
                [12,13,14,15]],
    future: []
  }
  let solution = [[3,7,11,15],
                    [2,6,10,14],
                    [1,5,9,13],
                    [0,4,8,12]];
  const rotated = Board(sampleBoard, {type:'ROTATE_LEFT'});
  expect(rotated.present).toEqual(solution)
})

it('MergeRight', () => {
  let sampleBoard = {
    past: [],
    present: [[2,2,2,2],
              [4,4,4,0],
              [0,8,8,0],
              [16,0,0,16]],
    future: []
  }
  let solution = [[0,0,4,4],
                  [0,0,4,8],
                  [0,0,0,16],
                  [0,0,0,32]]
  const merged = Board(sampleBoard, {type:'MERGE_RIGHT'});
  expect(merged.present).toEqual(solution);
})

it('MergeLeft', () => {
  let sampleBoard = {
    past: [],
    present: [[2,2,2,2],
              [4,4,4,0],
              [0,8,8,0],
              [16,0,0,16]],
    future: []
  }
  let solution = [[4,4,0,0],
                  [8,4,0,0],
                  [16,0,0,0],
                  [32,0,0,0]]
  const merged = Board(sampleBoard, {type:'MERGE_LEFT'});
  expect(merged.present).toEqual(solution);
})
