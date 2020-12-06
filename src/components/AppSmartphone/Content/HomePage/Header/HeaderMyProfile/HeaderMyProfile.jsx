import React, { useContext } from 'react'

import {AuthContext} from '../../../../../Contexts'

function HeaderMyProfile() {
    const {userData} = useContext(AuthContext)

    if(!userData) {
        userData.photo = 'https://i.ya-webdesign.com/images/loading-png-gif.gif'
        userData.username = 'Not found'
    }


    return (
        <div className='HeaderMyProfile' onClick={() => {
            document.querySelector('.Left').classList.add('isLeftClicked')
            document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')
        }}>
            <img src={userData.photo} className='PostUserIcon' alt='img' />
            <div className='HeaderUserInfo'>
                <h5>{userData.username}</h5>
            </div>
        </div>
    )
}

export default HeaderMyProfile