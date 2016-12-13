/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { PropTypes } from 'react'
import Row from "./Row"
import MovementButtons from '../MovementButtons'

const Board = (props, {store}) => {
    return (
        <div>
            <table>
                <tbody>
                    {store.getState().Board.map((x, i) =>
                        <Row value={x} key={i}/>
                    )}
                </tbody>
            </table>
            <MovementButtons/>
        </div>
    )
}

Board.contextTypes = {
    store: React.PropTypes.object
}

Board.propTypes = {
    value: PropTypes.array
}

export default Board