/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Loss from "./Loss"
import Victory from "./Victory"

const Notifications = props => {
    return (
        <div>
            {props.Notification.victory && !props.Notification.victoryAcknowledged ?
            (<Victory/>) : null}

            {props.Notification.loss ?
            (<Loss/>) : null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Notification: state.Notifications
    }
}

Notifications.contextTypes = {
    store: React.PropTypes.object
}

Notifications.propTypes = {
    victory: PropTypes.string
}

export default connect(mapStateToProps)(Notifications);