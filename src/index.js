import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Board from './components/Board'
import board from './reducers/Board'

const store = createStore(board)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Board
        value={store.getState()}
        moveUp={() => store.dispatch({ type: 'MOVE_UP' })}
        moveRight={() => store.dispatch({ type: 'MOVE_RIGHT' })}
        moveDown={() => store.dispatch({ type: 'MOVE_DOWN' })}
        moveLeft={() => store.dispatch({ type: 'MOVE_LEFT' })}
        newGame={() => store.dispatch({ type: 'NEW_GAME' })}
    />,
    rootEl
)

render()
store.subscribe(render)