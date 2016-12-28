/**
 * Created by adam.kazberuk on 12/7/2016.
 */
import React, {Component} from 'react'

class Provider extends Component {
  getChildContext(){
    return {
      store: this.props.store
    }
  }
  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
}

export default Provider
