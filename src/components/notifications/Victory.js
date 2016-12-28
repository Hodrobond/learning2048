/**
 * Created by adam.kazberuk on 12/13/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {continueGame} from "../../actions/Notifications"
import {newGame} from '../../actions/MovementButtons'
var Modal = require('react-modal');

class Victory extends Component{
  render(){
    return(
      <Modal
        isOpen={this.props.victory && !this.props.victoryAcknowledged}
        contentLabel="Modal"
        className='modal-small loss'
      >
        <h1>Congratulations, you have won! Would you like to continue?</h1>
        <button onClick={() => this.props.newGame()}>NEW GAME</button>
        <button onClick={() => this.props.continueGame()}>CONTINUE GAME</button>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ newGame, continueGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Victory)
