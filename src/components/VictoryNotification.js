/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'

class VictoryNotification extends Component{
    static propTypes = {
        victory: PropTypes.string
    }
    render(){
        const {victory} = this.props;
        return (
            <div class="victory">
                1 {this.props.victory.toString()} 5
            </div>
        )
    }
}

export default VictoryNotification