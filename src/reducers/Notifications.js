/**
 * Created by adam.kazberuk on 12/7/2016.
 */

/*
    {
        loss: false
        victory: false
        victoryAcknowledged: false
    }

 */
export default (state = 0, action) => {
    if(state === 0){
        return initialize();
    }
    switch (action.type) {
        case "GAME_WIN":
            return {...state,
                victory : true};
            break;
        case "NEW_GAME":
            return initialize();
            break;
        case "GAME_LOSE":
            return {...state,
                loss: true};
        case "GAME_CONTINUE":
            return {...state,
                victoryAcknowledged: true};
        default:
            return state;
    }
}

function initialize(){
    let victory = false;
    let victoryAcknowledged = false;
    let loss = false;
    return {
        loss,
        victory,
        victoryAcknowledged
    }
}