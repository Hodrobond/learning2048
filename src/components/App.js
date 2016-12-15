/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Board from './grid/Board'
import Notifications from "./notifications/Notifications"
import History from "./history/History"

import {moveUp, moveRight, moveDown, moveLeft, newGame, winGame} from '../actions/MovementButtons'

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
                this.props.moveLeft()
                break;
            case 38:
                this.props.moveUp()
                // Key up.
                break;
            case 39:
                this.props.moveRight()
                // Key right.
                break;
            case 40:
                this.props.moveDown()
                // Key down.
                break;
            default:
                break;
        }
    }

    render(){
        return (
            <div>
                <Board/>
                <Notifications/>
                <History/>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ moveUp, moveRight, moveDown, moveLeft, newGame, winGame}, dispatch);
}


export default connect(null, mapDispatchToProps)(App)