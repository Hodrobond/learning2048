import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {getMove, hintMove, tenHints} from '../actions/Solver'

class Solver extends Component {
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render(){
    return(
      <div>
        <p>Use hints/solver at your own risk. This is still stupider than a goat.</p>
        <button onClick={() => this.props.getMove()}>Solve Game</button>
        <button onClick={() => this.props.hintMove()}>Hint Move</button>
        <button onClick={() => this.props.tenHints()}>Ten hints</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getMove, hintMove, tenHints }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Solver)
