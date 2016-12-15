/**
 * Created by adam.kazberuk on 12/15/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {redo} from "../../actions/History"


class Redo extends Component{
    render(){
        return (
            <button onClick={() => this.props.redo()}>Redo</button>
        )
    }
}

const mapStateToProps = (state) => {return state}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ redo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Redo)