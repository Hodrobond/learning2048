/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, {Component} from 'react'
import Board from './grid/Board'
import VictoryNotification from "./VictoryNotification"
import MovementButtons from './MovementButtons'

class App extends Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render() {
        return (
            <div>
                <Board/>
                <VictoryNotification/>
                <MovementButtons/>
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App