import React from 'react'

import {Close} from '@material-ui/icons'

function LogOffConfirm() {

    function handleLogOut() {
        localStorage.removeItem('local_token')
        window.location = '/'
    }

    return (
        <div className='LogOffConfirm'>
            <div className='LogOffConfirmMenu'>
                <div className='LogOffReturn' onClick={() => {document.querySelector('.LogOffConfirm').classList.remove('isLogOffClicked')}}>
                    <Close style={{fill: 'white'}} />
                </div>
                <h2>Confirm exiting</h2>
                <div className='LogOffConfirmButtons'>
                    <button onClick={handleLogOut}>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default LogOffConfirm