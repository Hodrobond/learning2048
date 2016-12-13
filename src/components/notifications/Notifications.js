/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import Loss from "./Loss"
import Victory from "./Victory"

class Notifications extends Component {
    componentDidMount(){
        const {store} = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate())
    }
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(dispatch){
        if(this.props.value.victory){
            //display popup
            return <div>
                        <Victory/>
                        <button onClick={this.newGame.bind(this)}>NEW GAME</button>
                    </div>
        }
        else if(this.props.value.loss){
            return <div>
                        <Loss/>
                    </div>
        }
        else{
            return <div></div>
        }
    }
    newGame(){
        return this.context.store.dispatch({type:"NEW_GAME"});
    }
}

Notifications.contextTypes = {
    store: React.PropTypes.object
}

Notifications.propTypes = {
    victory: PropTypes.string
}

export default connect()(Notifications);