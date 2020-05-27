import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

import CorrectScreen from './components/functions/verifyDeviceScreen/verifyDeviceScreen'

let CorrectDevice = <App />

ReactDOM.render(CorrectDevice, document.querySelector('#root'))

/* if(CorrectScreen == 'desktop') {
    CorrectDevice = <AppDesktop />
} else if(CorrectScreen == 'tablet') {
    CorrectDevice = <AppTablet />
} else {
    CorrectDevice = <AppSmartphone />
} */