import React from 'react'

import {ExitToApp} from '@material-ui/icons';

function LogOff() {
    return (
        <div className='LogOff' onClick={() => {document.querySelector('.LogOffConfirm').classList.add('isLogOffClicked')}}>
            <ExitToApp style={{fill: 'white'}} />
        </div>
    )
}

export default LogOff