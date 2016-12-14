/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import * as notificationActions from '../../actions/Notifications'
import React, { Component, PropTypes } from 'react'
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

const mapDispatchToProps = (dispatch) => ({
    newGame: () => {
        dispatch(notificationActions.newGame())
    },
    continueGame: () => {
        dispatch(notificationActions.continueGame())
    }
})

Notifications.contextTypes = {
    store: React.PropTypes.object
}

Notifications.propTypes = {
    victory: PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);