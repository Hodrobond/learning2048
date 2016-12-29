import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import App from './components/App'
import thunk from 'redux-thunk'
import Provider from './components/Provider'
import combinedReducer from './reducers/index'

import logger from "./middleware/logger"

import './index.css'

const rootEl = document.getElementById('root')
const render = () => ReactDOM.render(
    <Provider store={createStore(combinedReducer, applyMiddleware(logger, thunk))}>
        <App/>
    </Provider>,
    rootEl
)

render()
