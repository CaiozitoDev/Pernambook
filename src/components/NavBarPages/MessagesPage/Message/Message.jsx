import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function Message(props) {
    return (
        <Zoom in timeout={1000}>
            <div className='Message'>
                <Link to={`/chat/${props.data.chatId}`}>
                    <img src={props.data.photo} alt='img' />
                    <div className='MessageText' >
                        <h4>{props.data.username} sent:</h4>
                        <p>" {props.data.content} "</p>     
                        <span>{props.data.timestamp}</span>                      
                    </div>
                </Link>
            </div>
        </Zoom>
    )
}

export default Message