/**
 * Created by adam.kazberuk on 12/7/2016.
 */
import React, { PropTypes } from 'react'
import Tile from './Tile'

const Row= props => (
    <div className='boardRow'>{
        props.value.map((x, i) =>
            <Tile number={x} key={i}/>
        )
    }</div>
)

Row.propTypes = {
    number: PropTypes.number
}

export default Row
