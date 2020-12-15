import React, {useState} from 'react'

import LogOffConfirm from './LogOffConfirm/LogOffConfirm'

import {ExitToApp} from '@material-ui/icons';

function LogOff() {
    const [isLogOffClicked, setIsLogOffClicked] = useState(false)

    return (
        <>
            <div className='LogOff' onClick={() => {
                //document.querySelector('.LogOffConfirm').classList.add('isLogOffClicked')
    
                setIsLogOffClicked(true)
            }}>
                <ExitToApp style={{fill: 'white'}} />
            </div>
            
            <LogOffConfirm setIsLogOffClicked={setIsLogOffClicked} isLogOffClicked={isLogOffClicked} />
        </>
    )
}

export default LogOff