/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, {Component} from 'react'
import Board from './grid/Board'
import Notifications from "./notifications/Notifications"

class App extends Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(props, store) {
        return (
            <div>
                <Board value={this.context.store.getState().Board}/>
                <Notifications value={this.context.store.getState().Notifications}/>
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App