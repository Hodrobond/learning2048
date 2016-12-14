/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { PropTypes } from 'react'
import {connect} from 'react-redux'
import Row from "./Row"
import MovementButtons from '../MovementButtons'

const Board = (props, {store}) => {
    return (
        <div>
            <table>
                <tbody>
                    {props.Board.map((x, i) =>
                        <Row value={x} key={i}/>
                    )}
                </tbody>
            </table>
            <MovementButtons/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        Board: state.Board
    }
}

Board.contextTypes = {
    store: React.PropTypes.object
}

Board.propTypes = {
    value: PropTypes.array
}

export default connect(mapStateToProps)(Board)