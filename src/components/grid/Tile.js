/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { PropTypes } from 'react'

const Tile = props => (
    <td>{props.number}</td>
)

Tile.propTypes = {
    number: PropTypes.number
}

export default Tile