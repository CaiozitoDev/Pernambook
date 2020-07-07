import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function Message(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Message'>
                <a href={`/chat/${props.data.chatid}`}>
                    <img src={props.data.userPhoto} alt='img' />
                    <div className='MessageText' >
                        <h4>{props.data.username} sent:</h4>
                        <p>" {props.data.messagetext} "</p>                           
                    </div>
                </a>
            </div>
        </Zoom>
    )
}

export default Message