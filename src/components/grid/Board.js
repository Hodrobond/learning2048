/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { PropTypes } from 'react'
import Tile from './Tile'

const Board = (props, {store}) => {
    return (
        <div>
            <table>
                <tbody>
                    {store.getState().Board.map((x, i) => <tr key={i}>{
                        x.map((y, j) =>
                            <Tile number={y} key={j}/>
                        )
                    }</tr>)}
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