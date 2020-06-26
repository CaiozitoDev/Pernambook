import React, { useState, useEffect } from 'react'

import {InterfacePresets} from '../../InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

import axios from 'axios'
import jwt from 'jsonwebtoken'

function Friends() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [userList, setUserList] = useState([])

    useEffect(() => {
        axios.post('/friendlist', {db_user_id}).then(response => {
            setUserList(response.data)
        })
        .catch(err => {console.log(err)})
    })
    return (
        <div className='Friends'>
            <InterfacePresets title='Friends' />

            <div className='FriendsContent'>
                <FriendRequestArea />
                
                {userList.map(data => {
                    return <Friend frienddata={data} />
                })}
            </div>
        </div> 
    )
}

export default Friends