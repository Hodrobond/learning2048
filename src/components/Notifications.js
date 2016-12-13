/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'

class VictoryNotification extends Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        if(this.props.value.victory){
            //display popup
            return <div>You won!</div>
        }
        else{
            return <div></div>
        }
    }
}

    VictoryNotification.contextTypes = {
    store: React.PropTypes.object
}

VictoryNotification.propTypes = {
    victory: PropTypes.string
}

export default VictoryNotification