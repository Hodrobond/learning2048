/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'
import Board from './Board'

class App extends Component{
    static propTypes = {
        moveUp: PropTypes.func.isRequired,
        moveRight: PropTypes.func.isRequired,
        moveDown: PropTypes.func.isRequired,
        moveLeft: PropTypes.func.isRequired,
        newGame: PropTypes.func.isRequired
    }
    render(){
        const {value, moveUp, moveRight, moveDown, moveLeft, newGame} = this.props;

        return (
            <div>
                <Board value={value} moveUp={moveUp} moveRight={moveRight} moveDown={moveDown} moveLeft={moveLeft} newGame={newGame}/>
            </div>
        )
    }
}

export default App