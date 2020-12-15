import React, {useState, useEffect, useContext} from 'react'

import MobileInterfacePresets from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import Message from './Message/Message'

import api from '../../../services/API_CONFIG'

import {AuthContext} from '../../Contexts'

import socket from '../../../services/SOCKET_CONFIG'

function MessagesPage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [messageData, setMessageData] = useState([])

    useEffect(() => {
        getMessages()

        socket.on(`${db_user_id}_newmessage`, () => {
            getMessages()
        })
    }, [])

    function getMessages() {
        api.get(`/messagelist?db_user_id=${db_user_id}&notification=false`).then(response => {
            setMessageData(response.data.notSawMessages)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='MessagesPage'>
        {props.device == 'desktop' ? <DesktopInterfacePresets /> : <MobileInterfacePresets title='Messages' />}

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