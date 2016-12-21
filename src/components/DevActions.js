import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {newGame, winGame, loseGame} from '../actions/MovementButtons'
import Undo from './history/Undo'
import Redo from './history/Redo'

class DevActions extends Component {
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render(){
    return(
        <div>
            <button onClick={() => this.props.newGame()}>DEV - New Game</button>
            {' '}
            <button onClick={() => this.props.winGame()}>DEV - Win Game</button>
            {' '}
            <button onClick={() => this.props.loseGame()}>DEV - Lose Game</button>
            {' '}
            <Redo/>
            {' '}
            <Undo/>
        </div>
        )
  }
}

const mapStateToProps = (state) => {
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ newGame, winGame, loseGame }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DevActions)
