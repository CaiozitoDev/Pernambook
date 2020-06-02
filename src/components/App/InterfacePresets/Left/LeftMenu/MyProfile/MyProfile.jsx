import React from 'react'

function MyProfile() {
    return (
        <a href='/profile'>
            <div className='MyProfile'>
                <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon'/>
                <div>
                    <h4>Caio Felipe</h4>
                    <p>@CaioReidaFarofa</p>
                </div>
            </div>
        </a>
    )
}

export default MyProfile