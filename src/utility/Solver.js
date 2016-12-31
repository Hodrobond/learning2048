export const getTileInfo = (board) => {
//tileQuantity[n] = # of tiles of value 2^n
//exception: tileQuantity[0] == # of tiles of value 0 (instead of 1)
  let tileQuantity = [];
  for(let i=0;i<board.length;i++){
    for(let j=0;j<board[i].length;j++){
      let tileValue = board[i][j];
      let tilePower;
      if(tileValue > 0)
        tilePower = Math.log(tileValue)/Math.log(2)
      else {
        tilePower = 0;
      }
      tileQuantity[tilePower] = tileQuantity[tilePower] ? (tileQuantity[tilePower] + 1) : 1
    }
  }
  for(let i=0;i<tileQuantity.length;i++){
    if(tileQuantity[i] == null)
      tileQuantity[i] = 0;
  }
  return tileQuantity;
}

export const getHint = (board) => {

}
