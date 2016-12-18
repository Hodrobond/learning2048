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

import undoable, {distinctState} from 'redux-undo'

const Notifications = (state = 0, action) => {
    if(state === 0){
        return initialize();
    }
    switch (action.type) {
        case "WIN_GAME":
            return {...state,
                victory : true};
        case "NEW_GAME":
            return initialize();
        case "LOSE_GAME":
            return {...state,
                loss: true};
        case "CONTINUE_GAME":
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

const undoableNotifications = undoable(Notifications,
    {filter: distinctState()}
)

export default undoableNotifications;
