/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Row from "./Row"
import { newGame } from '../../actions/Board'
var Swipe = require('react-swipe-component');

import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft} from '../../actions/Board'

import './BoardStyle.css'

class Board extends Component {
  componentDidMount() {
    this.props.newGame();
  }

  componentWillUnmount(){

  }

  render(){
    return (
      <Swipe
                nodeName="div"
                className='boardContainer'
                onSwipedLeft={this.props.handleMoveLeft}
                onSwipedRight={this.props.handleMoveRight}
                onSwipedDown={this.props.handleMoveDown}
                onSwipedUp={this.props.handleMoveUp}>
        <button className='newGame' onClick={() => this.props.newGame()}>New Game</button>
        <div className='board'>
          {this.props.Board.present.map((x, i) =>
            <Row value={x} key={i}/>
          )}
        </div>
      </Swipe>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    Board: state.Board
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
