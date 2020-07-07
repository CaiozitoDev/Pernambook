import React, {useState} from 'react'

import {Home, Person, Email, Group} from '@material-ui/icons'

import api from '../../../../../../services/API_CONFIG'

function ListConfigs(props) {
    const [friendNumber, setFriendNumber] = useState(0)

    const [messageNumber, setMessageNumber] = useState(0)

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)

        api.get(`/notification?db_user_id=${props.id}`).then(response => {
            setFriendNumber(response.data) 
            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})

        api.get(`/messagelist?db_user_id=${props.id}&notification=${true}`).then(response => {
            setMessageNumber(response.data)
            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='ListConfigs'>
            <ul>
                <a href='/home'>
                    <li>
                        <Home />
                        <h4>Home page</h4>
                    </li>
                </a>
                <a href={`/profile/${props.username}`}>
                    <li>
                        <Person />
                        <h4>Profile</h4>
                    </li>
                </a>
                <a href={`/messages`}>
                    <li>
                        <Email />
                        <h4>Messages</h4>

                        <div className='Notification'>{messageNumber}</div>
                    </li>
                </a>
                <a href={`/friends/${props.username}`}>
                    <li>
                        <Group />
                        <h4>Friends</h4>

                        <div className='Notification'>{friendNumber}</div>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default ListConfigs