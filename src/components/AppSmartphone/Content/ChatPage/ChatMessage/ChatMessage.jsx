import React from 'react'

import {Zoom} from '@material-ui/core'

function ChatMessage(props) {
    return (
        <Zoom in={true} timeout={500}>
            <div className={`ChatMessage ${props.myMessage ? 'MyMessage' : 'OtherMessage'}`}>
                <img src={props.data.userPhoto} className='PostUserIcon'/>
                <p>{props.data.messagetext}</p>
            </div>
        </Zoom>
    )
}

export default ChatMessage