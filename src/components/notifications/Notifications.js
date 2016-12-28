/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import Loss from "./Loss"
import Victory from "./Victory"

import './Notifications.css'

const Notifications = props => {
    return (
        <div>
            {props.Notification.victory && !props.Notification.victoryAcknowledged ?
            (<Victory victory={props.Notification.victory} acknowledged={props.Notification.victoryAcknowledged}/>) : null}

            {props.Notification.loss ?
            (<Loss pastLength={props.pastLength}/>) : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Notification: state.App.present
    }
}

Notifications.contextTypes = {
    store: React.PropTypes.object
}

Notifications.propTypes = {
    victory: PropTypes.string
}

export default connect(mapStateToProps)(Notifications);
