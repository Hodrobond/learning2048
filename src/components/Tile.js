/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'

class Tile extends Component{
    static propTypes = {
        number: PropTypes.number
    }
    render(){
        const {number} = this.props;
        return (
            <td>
                {this.props.number}
            </td>
        )
    }
}

export default Tile