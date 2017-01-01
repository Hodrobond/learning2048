export const rowFilledAmount = (row) => {
  let count = 0;
  for(let i=0; i<row.length; i++){
    if(row[i] !== 0)
      count++;
  }
  return count;
}

export const isRowOrdered = (row) => {
  //to the right
  let highestValue = 0;
  let ordered = true;
  for(let i=0; i<row.length; i++){
    if(row[i] < highestValue)
      ordered = false;
    if(row[i] > highestValue)
      highestValue = row[i];
  }
  return ordered;
}
