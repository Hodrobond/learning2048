/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Board from './Board/Board'
import Notifications from "./notifications/Notifications"
import Score from './Score/Score'

import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame} from '../actions/Board'

import './AppStyle.css'

class App extends Component{
    componentDidMount() {
      document.onkeydown = this.handleKeyDown.bind(this);
    }

    componentWillUnmount(){
      document.removeEventListener("onkeydown", this.handleKeyDown);
    }

    handleKeyDown(event){
      var code = event.keyCode;
      if (event.charCode && code === 0)
        code = event.charCode;
      switch(code) {
        case 37:
          // Key left.
          this.props.handleMoveLeft()
          event.preventDefault();
          break;
        case 38:
          // Key up.
          this.props.handleMoveUp()
          event.preventDefault();
          break;
        case 39:
          // Key right.
          this.props.handleMoveRight()
          event.preventDefault();
          break;
        case 40:
          // Key down.
          this.props.handleMoveDown()
          event.preventDefault();
          break;
        default:
          break;
      }
    }

    render(){
      return (
        <div>
          <div className='app'>
            <div className='topBar'>
              <div className='appTitle'>
                <h1>2048</h1>
                <p>a learning<br/>experience</p>
              </div>
              <Score/>
            </div>
            <div className='description'>
              <h2>Here is something</h2>
              <p>you expected something <span>different</span></p>
            </div>
            <Board/>
            <Notifications pastLength={this.props.Board.past.length}/>
            <p className='instructions'>Here is where you would normally learn to play the game</p>
          </div>
        </div>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    App: state.App.present,
    Board: state.Board
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
