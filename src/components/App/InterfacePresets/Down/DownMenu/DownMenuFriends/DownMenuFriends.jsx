import React, {useState, useEffect} from 'react'

import DownMenuFriendChat from './DownMenuFriendChat/DownMenuFriendChat'

import api from '../../../../../../services/API_CONFIG'
import jwt from 'jsonwebtoken'

function DownMenuFriends() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [chatList, setChatList] = useState([])

    useEffect(() => {
        api.get(`/lastchat?db_user_id=${db_user_id}`).then(response => {
            setChatList(response.data)
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