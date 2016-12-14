/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React from 'react'
import Board from './grid/Board'
import Notifications from "./notifications/Notifications"

const App = props => (
    <div>
        <Board/>
        <Notifications/>
    </div>
)

App.contextTypes = {
    store: React.PropTypes.object
}
export default App