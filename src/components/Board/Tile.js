/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { PropTypes, Component } from 'react'

import './BoardStyle.css'

class Tile extends Component{
  render(){
    return(
      <div className={"tile tile-"+this.props.number}>{this.props.number}</div>
    )
  }
}

Tile.propTypes = {
  number: PropTypes.number
}

export default Tile
