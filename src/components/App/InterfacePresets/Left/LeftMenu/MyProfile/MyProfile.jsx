import React from 'react'

import {Link} from 'react-router-dom'

function MyProfile({username, photo}) {
    let userInfo

    if(username && photo) {
        userInfo = {
            src: photo,
            username: username
        }
    } else {
        userInfo = {
            src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
            username: 'Not found'
        }
    }

    return (
        <Link to={`/profile/${userInfo.username}`}>
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