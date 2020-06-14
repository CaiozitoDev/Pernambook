import React, { useState, useEffect } from 'react'

import {handleMyProfileData} from '../../../../../functions/LoadProfilePhoto/LoadProfilePhoto'

function MyProfile(props) {
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: ''
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setUserData(preValue => {
                return {...preValue, src: data.src, username: data.username}
            })
        })
    })

    return (
        <div className='MyProfile'>
            <a href={`/profile/${props.id}`}>
                <div className='UserDiv'>
                    <img src={userData.src} className='PostUserIcon' alt='img' />
                    <div className='HeaderUserInfo'>
                        <h5>{userData.username}</h5>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default MyProfile