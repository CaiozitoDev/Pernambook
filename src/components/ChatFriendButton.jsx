import React, {useState} from 'react'

import {Chat} from '@material-ui/icons'

import api from '../services/API_CONFIG'

function ChatFriendButton(props) {
    const [isDisabled, setIsDisabled] = useState(false)

    function handleChatFriend() {
        setIsDisabled(true)

        api.get(`/chat?db_user_id=${props.db_user_id}&userid=${props.postuserid}`).then(response => {
            setIsDisabled(false)
            window.location = '/chat/' + response.data.chatId
        })
        .catch(err => {console.log(err)})
    }

    return (
        <button className='ChatFriendButton' disabled={isDisabled} onClick={handleChatFriend}>
            <Chat />
        </button>
    )
}

export default ChatFriendButton