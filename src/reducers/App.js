/**
 * Created by adam.kazberuk on 12/6/2016.
 */

export default (state = 0, action) => {
    if(state === 0){
        return somethingAwesome();
    }
    switch (action.type) {
        case 'MOVE_UP':
            return move(state, 0);
        case 'MOVE_RIGHT':
            return move(state, 1);
        case 'MOVE_DOWN':
            return move(state, 2);
        case 'MOVE_LEFT':
            return move(state, 3);
        case 'NEW_GAME':
            return createBoard();
        default:
            return state;
    }
}

somethingAwesome = () => {
    return arguments;
}