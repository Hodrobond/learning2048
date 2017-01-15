import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {solveGame, stopSolving, hintMove} from '../actions/Solver'

import './Solver.css'

class Solver extends Component {
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render(){
    let solverButton;
    if(this.props.Solver.solving === true)
      solverButton = <button className='solver-button solving' onClick={() => this.props.stopSolving()}>Stop Solving</button>;
    else
      solverButton = <button className='solver-button not-solving' onClick={() => this.props.solveGame()}>Solve Game</button>

    let hintButton;
    if(this.props.Solver.hint != null){
      let directionCharacter;
      switch(this.props.Solver.hint){
        case 'MERGE_RIGHT':
          directionCharacter = '\8680'
          break;
        case 'MERGE_LEFT':
          directionCharacter = '\8678'
          break;
        case 'MERGE_UP':
          directionCharacter = '\8679'
          break;
        case 'MERGE_DOWN':
          directionCharacter = '\8681'
          break;
      }
      directionCharacter = String.fromCharCode(directionCharacter);
      hintButton = <button className='solver-button hinted' onClick={() => this.props.hintMove()}>{directionCharacter}</button>
    }
    else
      hintButton = <button className='solver-button' onClick={() => this.props.hintMove()}>Hint Move</button>

    return(
      <div>
        <p>Use hints/solver at your own risk. This is still stupider than a goat.</p>
        {solverButton}
        {hintButton}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      Solver: state.Solver
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ solveGame, stopSolving, hintMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Solver)
