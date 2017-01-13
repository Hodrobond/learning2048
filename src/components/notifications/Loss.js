/**
 * Created by adam.kazberuk on 12/13/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {continueGame} from "../../actions/Notifications"
import {newGame} from '../../actions/Board'
import {undoAmount} from "../../actions/History"
var Modal = require('react-modal');

class Loss extends Component{
  render(){
    return(
      <Modal
        isOpen={this.props.loss}
        contentLabel="Modal"
        className='modal-small loss'
      >
        <h1>Apologies, but it appears you are unable to continue</h1>
        <p>Would you like to retry your past 5 moves?</p>
        <button className='new-game notification-button' onClick={() => this.props.newGame()}>New Game</button>
        <button className='undo-moves notification-button' onClick={() => this.props.undoAmount(this.props.pastLength-5)}>Undo</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => { return state }

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame, continueGame, undoAmount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loss)
