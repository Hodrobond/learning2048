/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'

import './Score.css'

class Score extends Component {
  componentDidMount() {
    //probably putting effects for incrementing here? maybe?
  }

  componentWillUnmount(){

  }

  render(){
    return (
        <div className='scoreContainer'>
          <div className='scoreBlock'>
            <p>SCORE</p>
            <p>{this.props.Score.currentScore}</p>
          </div>
          <div className='scoreBlock'>
            <p>BEST</p>
            <p>{this.props.Score.highScore}</p>
          </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        Score: state.Score
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Score)
