/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import Loss from "./Loss"
import Victory from "./Victory"
import {newGame, continueGame} from "../../actions/Notifications"

class Notifications extends Component {
    render(){
        if(this.props.Notification.victory && !this.props.Notification.victoryAcknowledged){
            //display popup
            return <div>
                        <Victory/>
                        <button onClick={() => this.props.newGame()}>NEW GAME</button>
                        <button onClick={() => this.props.continueGame()}>CONTINUE GAME</button>
                    </div>
        }
        else if(this.props.Notification.loss){
            return <div>
                        <Loss/>
                        <button onClick={() => this.props.newGame()}>NEW GAME</button>
                    </div>
        }
        else{
            return <div></div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        Notification: state.Notifications
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ newGame, continueGame}, dispatch);
}

Notifications.contextTypes = {
    store: React.PropTypes.object
}

Notifications.propTypes = {
    victory: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);