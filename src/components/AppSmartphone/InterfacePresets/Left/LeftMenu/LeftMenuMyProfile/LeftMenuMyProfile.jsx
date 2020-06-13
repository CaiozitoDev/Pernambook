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
        <a href={`/profile/${props.id}`}>
            <div className='MyProfile'>
                <div className='UserDiv'>
                    <img src={userData.src} className='PostUserIcon' alt='img' />
                    <div className='UserInfo'>
                        <h5>{userData.username}</h5>
                    </div>
                </div>
                <div className='UserStats'>
                    <p> Friends: 23 Following: 634 </p>
                </div>
            </div>
        </a>
    )
}

export default MyProfile