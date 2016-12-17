import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import Provider from './components/Provider'
import combinedReducer from './reducers/index'

import logger from "./middleware/logger"
import gameStatus from "./middleware/gameStatus"

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={createStore(combinedReducer, applyMiddleware(logger, gameStatus))}>
        <App/>
    </Provider>,
    rootEl
)

render()
