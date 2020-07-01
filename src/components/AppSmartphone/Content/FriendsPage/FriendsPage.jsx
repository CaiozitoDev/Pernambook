import React, { useState, useEffect } from 'react'

import {InterfacePresets} from '../../InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

import {useParams} from 'react-router-dom'

import api from '../../../../services/API_CONFIG'

function Friends() {
    const [userList, setUserList] = useState([])

    const {username} = useParams()

    useEffect(() => {
        api.get(`/friendlist/${username}`).then(response => {
            setUserList(response.data)
        })
        .catch(err => {console.log(err)})
    })
    return (
        <div className='Friends'>
            <InterfacePresets title='Friends' />

            <div className='FriendsContent'>
                <FriendRequestArea />
                
                <h2>Friend list</h2>
                {userList.map(data => {
                    return <Friend frienddata={data} />
                })}
            </div>
        </div> 
    )
}

export default Friends