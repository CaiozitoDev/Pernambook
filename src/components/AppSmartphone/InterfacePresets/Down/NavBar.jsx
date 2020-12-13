import React, {useState, useContext, useEffect} from 'react'

import {Zoom} from '@material-ui/core'

import {Home, Search, Email, Group} from '@material-ui/icons'

import {AuthContext} from '../../../Contexts'

import api from '../../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

import socket from '../../../../services/SOCKET_CONFIG'

function NavBar() {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [friendNumber, setFriendNumber] = useState(0)

    const [messageNumber, setMessageNumber] = useState(0)

    useEffect(() => {
        getFriendsNotification()
        getMessagesNotification()

        socket.on(`${db_user_id}_friendrequestnotification`, () => {
            getFriendsNotification()
        })

        socket.on(`${db_user_id}_messagesnotification`, () => {
            getMessagesNotification()
        })
    }, [])

    function getFriendsNotification() {
        api.get(`/notification?db_user_id=${db_user_id}`).then(response => {
            setFriendNumber(response.data.friendsLength) 
        })
        .catch(err => {console.log(err)})
    }

    function getMessagesNotification() {
        api.get(`/messagelist?db_user_id=${db_user_id}&notification=true`).then(response => {
            setMessageNumber(response.data.notSawMessages)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='DownMenuComponents'>
            <Zoom in={true}>
                <ul>
                    <Link to='/home'>
                        <li>
                            <Home /> 
                        </li>
                    </Link>
                    <Link to='/search'>
                        <li>
                            <Search />
                        </li>
                    </Link>
                    <Link to={`/friends/${db_user_id}`}>
                        <li>
                            <Group />
                            <div className='Notification'>{friendNumber}</div>
                        </li>
                    </Link>
                    <Link to={`/messages`}>
                        <li>
                            <Email />
                            <div className='Notification'>{messageNumber}</div>
                        </li>
                    </Link>
                </ul> 
            </Zoom>
        </div>
    )
}

export default NavBar