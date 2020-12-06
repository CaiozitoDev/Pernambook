import React, { useContext } from 'react'

import {Link} from 'react-router-dom'

import {AuthContext} from '../../../../../Contexts'

function MyProfile({db_user_id}) {
    const {userData} = useContext(AuthContext)

    if(!userData) {
        userData.photo = 'https://i.ya-webdesign.com/images/loading-png-gif.gif'
        userData.username = 'Not found'
    }

    return (
        <div className='MyProfile'>
            <Link to={`/profile/${db_user_id}`}>
                <div className='UserDiv'>
                    <img src={userData.photo} className='PostUserIcon' alt='img' />
                    <div className='HeaderUserInfo'>
                        <h5>{userData.username}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default MyProfile