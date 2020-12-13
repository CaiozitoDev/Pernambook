import React, { useState, useEffect, useContext} from 'react'

import {InterfacePresets} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

import {useParams} from 'react-router-dom'

import api from '../../../services/API_CONFIG'

import {AuthContext} from '../../Contexts'

import socket from '../../../services/SOCKET_CONFIG'

function FriendsPage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [userList, setUserList] = useState([])

    const {userId: url_userId} = useParams()

    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        getFriends()

        socket.on(`${db_user_id}_friendlist`, () => {
            getFriends()
        })
    }, [])

    function getFriends() {
        api.get(`/friendlist/${url_userId}`).then(response => {
            setUserList(response.data.friendList)

            !response.data.success && setNotFound(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='FriendsPage'>
            {props.device == 'desktop' ? <DesktopInterfacePresets /> : <InterfacePresets title='Friends' />}

            <div className='FriendsContent'>
                <h1 className='Title'>{notFound ? 'User not found' : `Friends`}</h1>
                
                {url_userId == db_user_id && <FriendRequestArea id={db_user_id} />}
                
                {userList.map(data => {
                    return <Friend friendData={data} url_userId={url_userId} db_user_id={db_user_id} />
                })}
            </div>
        </div> 
    )
}

export default FriendsPage