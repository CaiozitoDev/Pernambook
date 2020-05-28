import React from 'react'

import AppDesktop from '../../App/App'
import AppTablet from '../../AppTablet/AppTablet'
import AppSmartphone from '../../AppSmartphone/AppSmartphone'

function verifyDeviceScreen() {

    // FUNÇÃO ABAIXO VERIFICA SE O PROPORTION PASSADO REALMENTE BATE COM O WIDTH ATUAL
    function confirmDeviceScreen(x) {
        if (x.matches) {           // If media query matches
            return true
        } else {
            return false
        }
    }

    let ScreenOptions = [
        {
            proportion: "(min-width: 1025px)",
            device: 'desktop'
        },
        {   proportion: '(min-width: 768px) and (max-width: 1024px)',
            device: 'tablet'
        },
        {   proportion: '(max-width: 768px)',
            device: 'smartphone'
        }
    ]

    let CorrectScreen, CorrectDevice

    for(let i = 0; ScreenOptions.length; i++) {
        let x = window.matchMedia(ScreenOptions[i].proportion)
        if(confirmDeviceScreen(x)) {
            CorrectScreen = ScreenOptions[i].device
            break
        }
    }
    
    if(CorrectScreen == 'desktop') {
        CorrectDevice = <AppDesktop />
    } else if(CorrectScreen == 'tablet') {
        CorrectDevice = <AppTablet /> 
    } else {
        CorrectDevice = <AppSmartphone />
    }

    return CorrectDevice
}

let CorrectDeviceToReturn = verifyDeviceScreen()

export default CorrectDeviceToReturn