import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import CorrectDevice from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

ReactDOM.render(CorrectDevice, document.querySelector('#root'))
