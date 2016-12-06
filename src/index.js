import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import board from './reducers/Board'

const store = createStore(board)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <App
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