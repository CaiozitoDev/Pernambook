import React, {useState} from 'react'

import {Zoom} from '@material-ui/core'

import {Home, Search, Email, Group} from '@material-ui/icons'

import jwt from 'jsonwebtoken'

import api from '../../../../services/API_CONFIG'

function NavBar() {
    const {db_user_id, username} = jwt.decode(localStorage.getItem('local_token'))

    const [friendNumber, setFriendNumber] = useState(0)

    const [messageNumber, setMessageNumber] = useState(0)

    const [isFriendRequestFinished, setIsFriendRequestFinished] = useState(true)
    const [isMessageRequestFinished, setIsMessageRequestFinished] = useState(true)

    if(isFriendRequestFinished) {
        setIsFriendRequestFinished(false)

        api.get(`/notification?db_user_id=${db_user_id}`).then(response => {
            setFriendNumber(response.data) 
            setIsFriendRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    if(isMessageRequestFinished) {
        setIsMessageRequestFinished(false)
        
        api.get(`/messagelist?db_user_id=${db_user_id}&notification=${true}`).then(response => {
            setMessageNumber(response.data)
            setIsMessageRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='DownMenu'>
            <div className='DownMenuComponents'>
                <Zoom in={true}>
                    <ul>
                        <a href='/home'>
                            <li>
                                <Home /> 
                            </li>
                        </a>
                        <a href='/search'>
                            <li>
                                <Search />
                            </li>
                        </a>
                        <a href={`/friends/${username}`}>
                            <li>
                                <Group />

                                <div className='Notification'>{friendNumber}</div>
                            </li>
                        </a>
                        <a href={`/messages`}>
                            <li>
                                <Email />

                                <div className='Notification'>{messageNumber}</div>
                            </li>
                        </a>
                    </ul> 
                </Zoom>
            </div>
        </div>
    )
}

export default NavBar