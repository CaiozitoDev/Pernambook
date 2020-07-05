import React from 'react'

import NavBar from '../NavBar'
import NewChatForm from '../NewChatForm'

function DownMenu(props) {
    return !props.isChat ? <NavBar /> : <NewChatForm />
}

export default DownMenu