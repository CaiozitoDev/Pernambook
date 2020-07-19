import React, {useState, useEffect} from 'react'

import {InterfacePresets} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import Message from './Message/Message'

import api from '../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

function MessagesPage(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [messageData, setMessageData] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    useEffect(() => {
        if(isRequestFinished) {
            setIsRequestFinished(false)
    
            api.get(`/messagelist?db_user_id=${db_user_id}`).then(response => {
                setMessageData(response.data)
                setIsRequestFinished(true)
            })
            .catch(err => {console.log(err)})
        }
    })

    return (
        <div className='MessagesPage'>
        {props.device == 'desktop' ? <DesktopInterfacePresets /> : <InterfacePresets title='Messages' />}

            <div className='MessagesContent'>
                <div className='MessageTitle'><h1>Messages: {messageData.length}</h1></div>
                {messageData.map(message => {
                    return <Message data={message} />
                })}
            </div>
        </div>
    )
}

export default MessagesPage