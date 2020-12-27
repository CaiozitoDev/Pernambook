import React, {useState} from 'react'

import App from '../../App'

import DesktopStyle from '../../../styles/desktop-style'
import MobileStyle from '../../../styles/mobile-style'

function SwitchDeviceLayout() {
    const AppDesktop = () => {
        return (
        <DesktopStyle>
            <App device='desktop' />
        </DesktopStyle>
        )
    }

    const AppSmartphone = () => {
        return (
        <MobileStyle>
            <App device='smartphone' />
        </MobileStyle>
        )
    }

    const [CurrentDevice, setCurrentDevice] = useState(() => {
        return window.matchMedia('(min-width: 800px)').matches ? <AppDesktop /> : <AppSmartphone />
    })
    
    window.matchMedia('(min-width: 800px)').addEventListener('change', e => {
        if(e.matches) {
            setCurrentDevice(<AppDesktop />)
        } else {
            setCurrentDevice(<AppSmartphone />)
        }
    })

    return CurrentDevice
}

export default SwitchDeviceLayout