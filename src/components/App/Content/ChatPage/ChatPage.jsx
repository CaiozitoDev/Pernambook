import React, {useState} from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'
import ChatMessage from './ChatMessage/ChatMessage'

import {Zoom} from '@material-ui/core'
import {KeyboardBackspace} from '@material-ui/icons'

import {useParams} from 'react-router-dom'

import api from '../../../../services/API_CONFIG'
import jwt from 'jsonwebtoken'

function ChatPage() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const {chatid} = useParams()

    const [chatData, setChatData] = useState({
        myProfile: {
            userPhoto: '',
            username: '',
            userid: ''
        },
        friendProfile: {
            userPhoto: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
            username: '',
            userid: ''
        },
        messages: []
    })

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)
        api.get(`/chat/${chatid}`).then(response => {
            setChatData({
                myProfile: db_user_id == response.data.members[0].userid ? response.data.members[0] : response.data.members[1],
                friendProfile: db_user_id !== response.data.members[0].userid ? response.data.members[0] : response.data.members[1],
                messages: response.data.messages
            })

            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='ChatPage' onLoad={() => {window.scrollTo(0,document.body.scrollHeight)}}>
            <InterfacePresets isChat={true} chatid={chatid} chatData={{myProfile: chatData.myProfile, friendProfile: chatData.friendProfile}}/>

            <div className='col-8 ChatContent'>
                <Zoom in={true} timeout={1000}>
                    <div className='ChatHeader'>
                        <a href='/messages'><KeyboardBackspace /></a>
                        <div className='ChatHeaderInfo'>
                            <img src={chatData.friendProfile.userPhoto} className='PostUserIcon' />
                            <h4>{chatData.friendProfile.username}</h4>
                        </div>
                    </div>
                </Zoom>

                <div className='ChatMessages'>
                    {chatData.messages.map(message => {
                        if(message.userid == db_user_id) {
                            return <ChatMessage data={message} myMessage={true} />
                        } else {
                            return <ChatMessage data={message} myMessage={false} />
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ChatPage