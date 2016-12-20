import Board from './Board'

var sampleBoard = {
  past: [],
  present:  [[0,1,2,3],
              [4,5,6,7],
              [8,9,10,11],
              [12,13,14,15]],
  future: []
}

it('RotateRight - simple', () => {
  var solution = [[12,8,4,0],
                  [13,9,5,1],
                  [14,10,6,2],
                  [15,11,7,3]]
  const rotated = Board(sampleBoard, {type:'ROTATE_RIGHT'});
  expect(rotated.present).toEqual(solution)
})
