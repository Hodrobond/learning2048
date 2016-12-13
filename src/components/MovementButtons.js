/**
 * Created by adam.kazberuk on 12/7/2016.
 */

import React from 'react'
import {connect} from 'react-redux'

function MovementButtons({dispatch}){
    function moveUp(){
        return dispatch({type: "MOVE_UP"})
    }

    function moveRight(){
        return dispatch({type: "MOVE_RIGHT"})
    }

    function moveDown(){
        return dispatch({type: "MOVE_DOWN"})
    }

    function moveLeft(){
        return dispatch({type: "MOVE_LEFT"})
    }

    function newGame(){
        return dispatch({type: "NEW_GAME"})
    }

    return(
        <div>
            <button onClick={moveUp}>Up</button>
            {' '}
            <button onClick={moveRight}>Right</button>
            {' '}
            <button onClick={moveDown}>Down</button>
            {' '}
            <button onClick={moveLeft}>Left</button>
            {' '}
            <button onClick={newGame}>New Game</button>
        </div>
    )
}


export default connect()(MovementButtons);