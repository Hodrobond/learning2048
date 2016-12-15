/**
 * Created by adam.kazberuk on 12/15/2016.
 */
import React, {Component} from 'react'
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'
import {undo} from "../../actions/History"


class Undo extends Component{
    render(){
        return (
            <button onClick={() => this.props.undo()}>Undo</button>
        )
    }
}

const mapStateToProps = (state) => {return state}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ undo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Undo)