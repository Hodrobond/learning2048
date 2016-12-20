/**
 * Created by adam.kazberuk on 12/7/2016.
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame, loseGame} from '../actions/MovementButtons'

class MovementButtons extends Component {
    render(){
        return(
            <div>
                <button onClick={() => this.props.handleMoveUp(this.props.Board)}>Up</button>
                {' '}
                <button onClick={() => this.props.handleMoveRight(this.props.Board)}>Right</button>
                {' '}
                <button onClick={() => this.props.handleMoveDown(this.props.Board)}>Down</button>
                {' '}
                <button onClick={() => this.props.handleMoveLeft(this.props.Board)}>Left</button>
                {' '}
                <button onClick={() => this.props.newGame()}>New Game</button>
                {' '}
                <button onClick={() => this.props.winGame()}>Win Game</button>
                {' '}
                <button onClick={() => this.props.loseGame()}>Lose Game</button>
                {' '}
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        Board: state.Board.present
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame, loseGame}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MovementButtons);
