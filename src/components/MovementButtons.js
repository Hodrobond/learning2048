/**
 * Created by adam.kazberuk on 12/7/2016.
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {moveUp, moveRight, moveDown, moveLeft, newGame, winGame, loseGame, undo, redo} from '../actions/MovementButtons'

class MovementButtons extends Component {
    render(){
        return(
            <div>
                <button onClick={() => this.props.moveUp()}>Up</button>
                {' '}
                <button onClick={() => this.props.moveRight()}>Right</button>
                {' '}
                <button onClick={() => this.props.moveDown()}>Down</button>
                {' '}
                <button onClick={() => this.props.moveLeft()}>Left</button>
                {' '}
                <button onClick={() => this.props.newGame()}>New Game</button>
                {' '}
                <button onClick={() => this.props.winGame()}>Win Game</button>
                {' '}
                <button onClick={() => this.props.loseGame()}>Lose Game</button>
                {' '}
                <button onClick={() => this.props.undo()}>Undo</button>
                {' '}
                <button onClick={() => this.props.redo()}>Redo</button>
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        Notification: state.Notifications
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ moveUp, moveRight, moveDown, moveLeft, newGame, winGame, loseGame, undo, redo}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MovementButtons);