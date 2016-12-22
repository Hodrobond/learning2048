/**
 * Created by adam.kazberuk on 12/7/2016.
 */

import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft} from '../actions/MovementButtons'

import './MovementButtonsStyle.css'

class MovementButtons extends Component {
    render(){
        return(
            <div className='movementButtons'>
                <button className='up' onClick={() => this.props.handleMoveUp(this.props.Board)}>Up</button>
                {' '}
                <button className='right' onClick={() => this.props.handleMoveRight(this.props.Board)}>Right</button>
                {' '}
                <button className='down' onClick={() => this.props.handleMoveDown(this.props.Board)}>Down</button>
                {' '}
                <button className='left' onClick={() => this.props.handleMoveLeft(this.props.Board)}>Left</button>
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
    return bindActionCreators({ handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MovementButtons);
