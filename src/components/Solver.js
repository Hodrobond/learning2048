import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import {getMove, hintMove} from '../actions/Solver'

class Solver extends Component {
  componentDidMount() {

  }

  componentWillUnmount(){

  }

  render(){
    return(
      <div>
        <button onClick={() => this.props.getMove()}>Solve Game</button>
        <button onClick={() => this.props.hintMove()}>Hint Move</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ getMove, hintMove }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Solver)
