import React from 'react'
import ReactDOM from 'react-dom'

import CorrectDevice from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

CorrectDevice.style == 'desktop' ?  document.head.style = require('./components/styles.css') : document.head.style = require('./components/phone.css')


ReactDOM.render(CorrectDevice.component, document.querySelector('#root'))
