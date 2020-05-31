import React from 'react'

import {Close} from '@material-ui/icons'

function LogOffConfirm() {
    return (
        <div className='LogOffConfirm'>
            <div className='LogOffConfirmMenu'>
                <div className='LogOffReturn' onClick={() => {document.querySelector('.LogOffConfirm').classList.remove('isLogOffClicked')}}>
                    <Close style={{fill: 'white'}} />
                </div>
                <h2>Confirm exiting</h2>
                <div className='LogOffConfirmButtons'>
                    <button>Cancel</button>
                    <button>Exit</button>
                </div>
            </div>
        </div>
    )
}

export default LogOffConfirm