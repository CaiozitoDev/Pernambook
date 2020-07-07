import React, {useState} from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import Message from './Message/Message'

import api from '../../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

function MessagesPage() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [messageData, setMessageData] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)

        api.get(`/messagelist?db_user_id=${db_user_id}`).then(response => {
            setMessageData(response.data)
            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }
    return (
        <div className='MessagesPage'>
            <InterfacePresets />

            <div className='MessagesContent'>
                <h1>Messages</h1>
                {messageData.map(message => {
                    return <Message data={message} />
                })}
            </div>
        </div>
    )
}

export default MessagesPage