/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { PropTypes, Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Row from "./Row"
import MovementButtons from '../MovementButtons'
import { initializeBoard } from '../../actions/MovementButtons'

class Board extends Component {
  componentDidMount() {
      this.props.initializeBoard();
  }

  componentWillUnmount(){

  }

  render(){
    return (
        <div>
            <table>
                <tbody>
                    {this.props.Board.present.map((x, i) =>
                        <Row value={x} key={i}/>
                    )}
                </tbody>
            </table>
            <MovementButtons Board={this.props.Board.present}/>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        Board: state.Board
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ initializeBoard }, dispatch);
}

Board.contextTypes = {
    store: React.PropTypes.object
}

Board.propTypes = {
    value: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
