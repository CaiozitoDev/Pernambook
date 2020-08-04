import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function Message(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Message'>
                <Link to={`/chat/${props.data.chatid}`}>
                    <img src={props.data.userPhoto} alt='img' />
                    <div className='MessageText' >
                        <h4>{props.data.username} sent:</h4>
                        <p>" {props.data.messagetext} "</p>                           
                    </div>
                </Link>
            </div>
        </Zoom>
    )
}

export default Message