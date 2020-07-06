import React from 'react'

import NavBar from '../NavBar'
import NewChatForm from '../NewChatForm'

function DownMenu(props) {
    return !props.isChat ? <NavBar /> : <NewChatForm chatid={props.chatid} chatData={props.chatData}/>
}

export default DownMenu