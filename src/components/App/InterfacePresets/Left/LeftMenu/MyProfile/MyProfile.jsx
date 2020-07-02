import React, { useState, useEffect } from 'react'

import {handleMyProfileData} from '../../../../../functions/LoadProfilePhoto/LoadProfilePhoto'

function MyProfile(props) {
    const [myProfileData, setMyProfileData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: ''
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setMyProfileData(data)
        })
    }, [])
    

    return (
        <a href={`/profile/${props.username}`}>
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