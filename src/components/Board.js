/**
 * Created by adam.kazberuk on 12/5/2016.
 */
import React, { Component, PropTypes } from 'react'
import Tile from './Tile'

class Board extends Component {
    static propTypes = {
        moveUp: PropTypes.func.isRequired,
        moveRight: PropTypes.func.isRequired,
        moveDown: PropTypes.func.isRequired,
        moveLeft: PropTypes.func.isRequired,
        newGame: PropTypes.func.isRequired
    }

    incrementIfOdd = () => {
        if (this.props.value % 2 !== 0) {
            this.props.onIncrement()
        }
    }

    render() {
        const { value, moveUp, moveRight, moveDown, moveLeft, newGame, loss, victory} = this.props;
        return (
            <div>
                <table>
                    <tbody>
                        {this.props.value.board.map(x => <tr>{
                            x.map(y =>
                                <Tile number ={y}/>
                            )
                        }</tr>)}
                    </tbody>
                </table>
                {' '}
                <button onClick={moveUp}>
                    Up
                </button>
                    {' '}
                <button onClick={moveRight}>
                    Right
                </button>
                    {' '}
                <button onClick={moveDown}>
                    Down
                </button>
                    {' '}
                <button onClick={moveLeft}>
                    Left
                </button>
                    {' '}
                <button onClick={newGame}>
                    New Game
                </button>
            </div>
        )
    }
}

export default Board