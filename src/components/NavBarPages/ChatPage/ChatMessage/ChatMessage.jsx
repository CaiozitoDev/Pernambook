import React from 'react'

import {Zoom} from '@material-ui/core'

function ChatMessage(props) {
    return (
        <Zoom in timeout={500}>
            <div className={`ChatMessage ${props.myMessage ? 'MyMessage' : 'OtherMessage'}`}>
                <img src={props.photo} className='PostUserIcon'/>
                <p>{props.data.content}</p>
                <span>{props.data.timestamp}</span>
            </div>
        </Zoom>
    )
}

export default ChatMessage