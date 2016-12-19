/**
 * Created by adam.kazberuk on 12/13/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {newGame, continueGame} from "../../actions/Notifications"
import {undoAmount} from "../../actions/History"

class Loss extends Component{
    render(){
        return(
        <div>
            <h1>Apologies, but it appears you are unable to continue</h1>
            <button onClick={() => this.props.newGame()}>NEW GAME</button>
            <p>Would you like to retry your past 5 moves?</p>
            <button onClick={() => this.props.undoAmount(this.props.pastLength-5)}>Undo</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => { return state }

function mapDispatchToProps(dispatch){
    return bindActionCreators({ newGame, continueGame, undoAmount}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loss)
