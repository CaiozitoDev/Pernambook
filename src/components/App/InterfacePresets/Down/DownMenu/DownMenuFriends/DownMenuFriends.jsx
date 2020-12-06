import React, {useState, useEffect, useContext} from 'react'

import DownMenuFriendChat from './DownMenuFriendChat/DownMenuFriendChat'

import api from '../../../../../../services/API_CONFIG'

import {AuthContext} from '../../../../../Contexts'

function DownMenuFriends() {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [chatList, setChatList] = useState([])

    useEffect(() => {
        api.get(`/lastchat?db_user_id=${db_user_id}`).then(response => {
            setChatList(response.data.chatList)
        })
        .catch(err => {console.log(err)})
    }, [])

    return (
        <div className='DownMenuFriends'>
            {chatList.map(user => {
                return <DownMenuFriendChat data={user} />
            })}
        </div>
    )
}

export default DownMenuFriends