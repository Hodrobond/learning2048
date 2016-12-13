import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import App from './components/App'
import Provider from './components/Provider'
import combinedReducer from './reducers/index'

const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Provider store={createStore(combinedReducer, applyMiddleware(thunk))}>
        <App/>
    </Provider>,
    rootEl
)

render()