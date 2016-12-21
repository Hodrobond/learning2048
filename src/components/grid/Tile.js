/**
 * Created by adam.kazberuk on 12/6/2016.
 */
import React, { PropTypes, Component } from 'react'

class Tile extends Component{
  render(){
    return(
      <td>{this.props.number}</td>
    )
  }
}

Tile.propTypes = {
    number: PropTypes.number
}

export default Tile
