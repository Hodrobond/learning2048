import * as Solver from './Solver'

it('isRowOrdered - true', () => {
  let row = [0,2,4,8];
  expect(Solver.isRowOrdered(row)).toEqual(true);
})

it('isRowOrdered - false', () => {
  let row = [0,2,4,2];
  expect(Solver.isRowOrdered(row)).toEqual(false);
})
