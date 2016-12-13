/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { PropTypes } from 'react'

const VictoryNotification = (props, {store}) => (
    <div>
        {store.getState().VictoryNotification.victory.toString()}
    </div>
)
VictoryNotification.contextTypes = {
    store: React.PropTypes.object
}

VictoryNotification.propTypes = {
    victory: PropTypes.string
}

export default VictoryNotification