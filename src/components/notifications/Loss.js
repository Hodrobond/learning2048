/**
 * Created by adam.kazberuk on 12/13/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {newGame, continueGame} from "../../actions/Notifications"

class Loss extends Component{
    render(){
        return(
        <div>
            <h1>Apologies, but it appears you are unable to continue</h1>
            <button onClick={() => this.props.newGame()}>NEW GAME</button>
        </div>
        )
    }
}

const mapStateToProps = (state) => { return state }

function mapDispatchToProps(dispatch){
    return bindActionCreators({ newGame, continueGame}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Loss)