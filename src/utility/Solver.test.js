import * as Solver from './Solver'

it('getTileInfo', () => {
  //value: quantity
  //0: 3
  //2: 2
  //4: 2
  //8: 2
  //16: 1
  //32: 1
  //64: 3
  //128
  //256
  //512
  //1024: 1
  //2048: 1
  let board = [[0,2,4,8],
                [2,4,8,32],
                [16,64,64,64],
                [2048, 1024,0,0]];

  let solution = [3, 2, 2, 2, 1, 1, 3, 0, 0, 0, 1, 1];

  expect(Solver.getTileInfo(board)).toEqual(solution);
})
