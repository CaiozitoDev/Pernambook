import React from 'react'
import ReactDOM from 'react-dom'

import CorrectDevice from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

CorrectDevice.style == 'desktop' ? require('./components/App/styles.css') : require('./components/AppSmartphone/phone.css')

ReactDOM.render(CorrectDevice.component, document.querySelector('#root'))
