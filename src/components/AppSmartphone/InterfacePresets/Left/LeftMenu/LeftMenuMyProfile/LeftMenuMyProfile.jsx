import React from 'react'

function MyProfile() {
    return (
        <div className='MyProfile'>
            <div className='UserDiv'>
                <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon'/>
                <div className='UserInfo'>
                    <h5>Caio Felipe</h5>
                    <p>@CaioReidaFarofa</p>
                </div>
            </div>
            <div className='UserStats'>
                <p> Friends: 23 Following: 634 </p>
            </div>
        </div>
    )
}

export default MyProfile