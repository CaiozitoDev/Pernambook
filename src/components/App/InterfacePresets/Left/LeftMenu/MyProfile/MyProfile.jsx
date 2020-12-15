import React from 'react'

import {Link} from 'react-router-dom'

function MyProfile({username, photo, id}) {
    let userInfo

    if(username && photo) {
        userInfo = {
            id,
            src: photo,
            username: username
        }
    } else {
        userInfo = {
            id: '',
            src: process.env.PUBLIC_URL + '/loading-png-gif.gif',
            username: 'Not found'
        }
    }

    return (
        <Link to={`/profile/${userInfo.id}`}>
            <div className='MyProfile'>
                <img src={userInfo.src} className='PostUserIcon' alt='img' />
                <div>
                    <h4>{userInfo.username}</h4>
                </div>
            </div>
        </Link>
    )
}

export default MyProfile