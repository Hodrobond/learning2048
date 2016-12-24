export const increment = (value) => {
  return ({
    type:'SCORE_INCREMENT',
    value: value
  });
}

export const incrementHigh = (value) => {
  return ({
    type: 'HIGH_SCORE_INCREMENT',
    value: value
  })
}
