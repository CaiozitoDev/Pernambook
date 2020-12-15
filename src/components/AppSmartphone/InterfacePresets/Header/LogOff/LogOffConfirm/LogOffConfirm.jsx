import React from 'react'

import {Close} from '@material-ui/icons'

import {Fade} from '@material-ui/core'

import api from '../../../../../../services/API_CONFIG'

function LogOffConfirm({isLogOffClicked, setIsLogOffClicked}) {

    function handleLogOut() {
        /* localStorage.removeItem('local_token') */

        api.get('/logoff').then(() => {
            window.location = '/'
        })
    }

    return (
        <Fade in={isLogOffClicked} mountOnEnter unmountOnExit timeout={500}>
            <div className='LogOffConfirm'>
                <div className='LogOffConfirmMenu'>
                    <div className='LogOffReturn' onClick={() => {
                        //document.querySelector('.LogOffConfirm').classList.remove('isLogOffClicked')

                        setIsLogOffClicked(false)
                    }}>
                        <Close style={{fill: 'white'}} />
                    </div>
                    <h2>Confirm exiting</h2>
                    <div className='LogOffConfirmButtons'>
                        <button onClick={handleLogOut}>Exit</button>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default LogOffConfirm