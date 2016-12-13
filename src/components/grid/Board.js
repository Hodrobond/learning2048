/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { PropTypes } from 'react'
import Row from "./Row"

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