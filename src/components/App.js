/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, {Component} from 'react'
import Board from './grid/Board'
import VictoryNotification from "./VictoryNotification"

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
            </div>
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
}

export default App