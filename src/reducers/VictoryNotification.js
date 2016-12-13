/**
 * Created by adam.kazberuk on 12/7/2016.
 */
export default (state = 0, action) => {
    if(state === 0){
        return initialize();
    }
    switch (action.type) {
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