/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Board from './Board/Board'
import Notifications from "./notifications/Notifications"
import DevActions from './DevActions'
import Score from './Score/Score'

import {handleMoveUp, handleMoveRight, handleMoveDown, handleMoveLeft, newGame, winGame} from '../actions/MovementButtons'

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
                break;
            case 38:
                this.props.handleMoveUp()
                // Key up.
                break;
            case 39:
                this.props.handleMoveRight()
                // Key right.
                break;
            case 40:
                this.props.handleMoveDown()
                // Key down.
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div>
              <div className='app'>
                  <Board/>
                  <Notifications Notification={this.props.App}
                    pastLength={this.props.Board.past.length}/>
              </div>
              <Score/>
              <DevActions/>
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
