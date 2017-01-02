/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Board from './Board/Board'
import Notifications from "./notifications/Notifications"
import Score from './Score/Score'
import Solver from './Solver'
import DevActions from './DevActions'
//import * as SolverUtil from '../utility/Solver'

import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame} from '../actions/Board'

import './AppStyle.css'

class App extends Component{
    componentDidMount() {
      document.onkeydown = this.handleKeyDown.bind(this);
/*      const testBoard = [[4,8,8,32],
                          [2,0,2,16],
                          [0,0,0,4],
                          [2,0,0,0]];
      const emptyTestBoard = [[0,0,0,0],
                              [0,0,0,0],
                              [0,0,0,0],
                              [0,0,0,0]];
      const testResults = SolverUtil.getChainedBoard(testBoard);
      console.log(testResults);*/
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
          <Solver/>
          <DevActions/>
          <Notifications pastLength={this.props.Board.past.length}/>
          <p className='instructions'>Here is where you would normally learn to play the game</p>
          <p className='disclaimer'>
            Re-created 2048 initially by <a href="http://gabrielecirulli.com" target="_blank">Gabriele Cirulli</a>, which was based on <a href="https://itunes.apple.com/us/app/1024!/id823499224" target="_blank">1024 by Veewo Studio</a> and is pretty close to <a href="http://asherv.com/threes/" target="_blank">Threes by Asher Vollmer.</a>
          </p>
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
