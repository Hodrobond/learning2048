/**
 * Created by adam.kazberuk on 12/7/2016.
 */
import React, { PropTypes } from 'react'
import Tile from './Tile'

const Row= props => (
    <tr>{
        props.value.map(x =>
            <Tile number={x}/>
        )
    }</tr>
)

Row.propTypes = {
    number: PropTypes.number
}

export default Row