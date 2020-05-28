import React from 'react'
import ReactDOM from 'react-dom'

import CorrectDevice from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

/* import AppDesktop from './components/App/App'
import AppTablet from './components/AppTablet/App'
import AppSmartphone from './components/AppSmartphone/App'

let CorrectDevice

if(CorrectScreen == 'desktop') {
    CorrectDevice = <AppDesktop />
} else if(CorrectScreen == 'tablet') {
    CorrectDevice = <AppTablet />
} else {
    CorrectDevice = <AppSmartphone />
} */



ReactDOM.render(CorrectDevice, document.querySelector('#root'))

