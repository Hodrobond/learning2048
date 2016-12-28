/**
 * Created by adam.kazberuk on 12/15/2016.
 */
import React from 'react'
import {connect} from 'react-redux'

import Redo from "./Redo"
import Undo from "./Undo"

const History = () => {
  return(
    <div>
      <Redo/>
      <Undo/>
    </div>
  )
}

export default connect()(History);
