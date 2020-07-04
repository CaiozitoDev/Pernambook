import React, { useState, useEffect } from 'react'

import {InterfacePresets} from '../../InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

import {useParams} from 'react-router-dom'

import api from '../../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

function Friends() {
    const {db_user_id, username} = jwt.decode(localStorage.getItem('local_token'))

    const [userList, setUserList] = useState([])

    const {username: url_username} = useParams()

    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        api.get(`/friendlist/${url_username}`).then(response => {
            setUserList(response.data.friendlist)

            !response.data.success && setNotFound(true)
        })
        .catch(err => {console.log(err)})
    })
    return (
        <div className='FriendsPage'>
            <InterfacePresets title='Friends' />

            <div className='FriendsContent'>
                {url_username == username && <FriendRequestArea id={db_user_id} />}
                
                <h2>{notFound ? 'User not found' : `${url_username} - friends`}</h2>
                {userList.map(data => {
                    return <Friend frienddata={data} id={db_user_id} url_username={url_username} username={username} />
                })}
            </div>
        </div> 
    )
}

export default Friends