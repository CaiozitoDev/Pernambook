import React, { useState, useEffect } from 'react'

import {handleMyProfileData} from '../../../../../functions/LoadProfilePhoto/LoadProfilePhoto'

import {Link} from 'react-router-dom'

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
    }, [])

    return (
        <div className='MyProfile'>
            <Link to={`/profile/${props.username}`}>
                <div className='UserDiv'>
                    <img src={userData.src} className='PostUserIcon' alt='img' />
                    <div className='HeaderUserInfo'>
                        <h5>{userData.username}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MyProfile