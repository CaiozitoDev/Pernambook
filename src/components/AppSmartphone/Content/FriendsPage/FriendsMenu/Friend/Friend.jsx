import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function Friend() {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Friend'>
                <li>
                    <img src={window.location.origin + '/fds/EWk-zuhXgAAaZGx.jpg'} alt='img' />
                    <div className='UserInfo'>
                        <h3>Caio Felipe</h3>
                        <p>@CaioReidaFarofa</p>
                    </div>
                </li>
            </div>
        </Zoom>
    )
}

export default Friend