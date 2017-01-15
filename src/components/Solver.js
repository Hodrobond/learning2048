import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {solveGame, stopSolving, hintMove, tenHints} from '../actions/Solver'

class Solver extends Component {
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render(){
    let solverButton;
    if(this.props.Solver.solving === true)
      solverButton = <button className='solving' onClick={() => this.props.stopSolving()}>Stop Solving</button>;
    else
      solverButton = <button className='not-solving' onClick={() => this.props.solveGame()}>Solve Game</button>

    return(
      <div>
        <p>Use hints/solver at your own risk. This is still stupider than a goat.</p>
        {solverButton}
        <button onClick={() => this.props.hintMove()}>Hint Move</button>
        <button onClick={() => this.props.tenHints()}>One Hundred hints</button>
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
    return bindActionCreators({ solveGame, stopSolving, hintMove, tenHints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Solver)
