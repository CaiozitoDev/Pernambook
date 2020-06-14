import React, {useEffect, useState} from 'react'

import {handleMyProfileData} from '../../../../../functions/LoadProfilePhoto/LoadProfilePhoto'

function HeaderMyProfile() {
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setUserData(preValue => {
                return {...preValue, src: data.src, username: data.username}
            })
        })
    })

    return (
        <div className='HeaderMyProfile' onClick={() => {
            document.querySelector('.Left').classList.add('isLeftClicked')
            document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')
        }}>
            <img src={userData.src} className='PostUserIcon' alt='img' />
            <div className='HeaderUserInfo'>
                <h5>{userData.username}</h5>
            </div>
        </div>
    )
}

export default HeaderMyProfile