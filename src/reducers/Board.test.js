import Board from './Board'

const identityTwo = [[2,0,0,0],
                      [0,2,0,0],
                      [0,0,2,0],
                      [0,0,0,2]];

let historyTemplate = {
  past: [],
  present: [],
  future: []
}

it('MergeUp - merge', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: [[2,4,0,16],
              [2,4,8,0],
              [2,4,8,0],
              [2,0,0,16]]
            }
  let solution = [[4,8,16,32],
                  [4,4,0,0],
                  [0,0,0,0],
                  [0,0,0,0]];
  const merged = Board(sampleBoard, {type:'MERGE_UP'})
  expect(merged.present).toEqual(solution);
})

it('MergeUp - shift', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: identityTwo
  }
  let solution =[[2,2,2,2],
                  [0,0,0,0],
                  [0,0,0,0],
                  [0,0,0,0]]
  const merged = Board(sampleBoard, {type:'MERGE_UP'})
  expect(merged.present).toEqual(solution);
})

it('MergeRight - merge', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: [[2,2,2,2],
              [4,4,4,0],
              [0,8,8,0],
              [16,0,0,16]]
  }
  let solution = [[0,0,4,4],
                  [0,0,4,8],
                  [0,0,0,16],
                  [0,0,0,32]];
  const merged = Board(sampleBoard, {type:'MERGE_RIGHT'});
  expect(merged.present).toEqual(solution);
})

it('MergeRight - shift', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: identityTwo
  }
  let solution = [[0,0,0,2],
                  [0,0,0,2],
                  [0,0,0,2],
                  [0,0,0,2]]
  const merged = Board(sampleBoard, {type:'MERGE_RIGHT'});
  expect(merged.present).toEqual(solution);
})

it('MergeLeft - merge', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: [[2,2,2,2],
              [0,4,4,4],
              [0,8,8,0],
              [16,0,0,16]]
  }
  let solution = [[4,4,0,0],
                  [8,4,0,0],
                  [16,0,0,0],
                  [32,0,0,0]];
  const merged = Board(sampleBoard, {type: 'MERGE_LEFT'});
  expect(merged.present).toEqual(solution);
})

it('MergeLeft - shift', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: identityTwo
  }
  let solution =[[2,0,0,0],
                  [2,0,0,0],
                  [2,0,0,0],
                  [2,0,0,0]];
  const merged = Board(sampleBoard, {type:'MERGE_LEFT'});
  expect(merged.present).toEqual(solution)
})

it('MergeRight - merge', () => {
  let sampleBoard = {
    ...historyTemplate,
    present: [[2,2,2,2],
              [4,4,4,0],
              [0,8,8,0],
              [16,0,0,16]]
  }
  let solution = [[0,0,4,4],
                  [0,0,4,8],
                  [0,0,0,16],
                  [0,0,0,32]];
  const merged = Board(sampleBoard, {type:'MERGE_RIGHT'});
  expect(merged.present).toEqual(solution);
})

it('MergeRight - shift', () => {
  let sampleBoard = {
    ...historyTemplate,
    present:identityTwo
  }
  let solution = [[0,0,0,2],
                  [0,0,0,2],
                  [0,0,0,2],
                  [0,0,0,2]];
  const merged = Board(sampleBoard, {type:'MERGE_RIGHT'});
  expect(merged.present).toEqual(solution);
})
