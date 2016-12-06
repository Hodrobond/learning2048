/**
 * Created by adam.kazberuk on 12/5/2016.
 */
export default (state = 0, action) => {
    if(state === 0){
        return createBoard();
    }
    switch (action.type) {
        case 'MOVE_UP':
            return moveUp(state);
        case 'MOVE_RIGHT':
            return moveRight(state);
        case 'MOVE_DOWN':
            return moveDown(state);
        case 'MOVE_LEFT':
            return moveLeft(state);
        case 'NEW_GAME':
            return createBoard();
        default:
            return state;
    }
}

function createBoard(){
    var board = [];//initialize array
    var boardSize = 4;
    var popRate = 0.2;
    for (var i = 0 ; i < boardSize; i++) {
        board[i] = [];//initialize inner array
        for (var j = 0; j < boardSize; j++) {//i++ = j++
            if(Math.random() < popRate){ //20% chance
                board[i][j] = getNewTileValue();
            }
            else{
                board[i][j] = 0;
            }
        }
    }
    return board;
}

//adapt an array for rates instead of adding else ifs
function getNewTileValue(){
    var sample = Math.random();
    var numberRate = [0.0125, 0.1, 1];
    var toPopulate = numberRate.map(x => {return (sample < x)});
    for(let index = 0; index < toPopulate.length; index++){
        if(toPopulate[index] === true)
            return Math.pow(2, toPopulate.length - index)
    }
}

function getNewTileBasic(){
    var sample = Math.random();
    if(sample < 0.0125)
        return 8;
    else if(sample < 0.1)
        return 4;
    else
        return 2;
}

function moveUp(board){
    console.log("up");
    return board;
}

function moveRight(board){
    console.log("right");
    return board;
}

function moveDown(board){
    console.log("down");
    return board;
}

function moveLeft(board){
    console.log("left");
    return board;
}