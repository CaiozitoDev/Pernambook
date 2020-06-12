import React, { useState, useEffect } from 'react'

import {handleMyProfileData} from '../../../../../functions/LoadProfilePhoto'

function MyProfile() {
    const [myProfileData, setMyProfileData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: ''
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setMyProfileData(data)
        })
    })
    

    return (
        <a href='/profile'>
            <div className='MyProfile'>
                <img src={myProfileData.src} className='PostUserIcon' alt='img' />
                <div>
                    <h4>{myProfileData.username}</h4>
                </div>
            </div>
        </a>
    )
}

export default MyProfile