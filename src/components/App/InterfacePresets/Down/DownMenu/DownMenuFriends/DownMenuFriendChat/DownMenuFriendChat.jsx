import React from 'react'

import {Zoom} from '@material-ui/core'

function DownMenuFriendChat(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='DownMenuFriendChat'>
                <a href={`/chat/${props.data.chatid}`}>
                    <img src={props.data.user.userPhoto} className='PostUserIcon'/>
                </a>
            </div>
        </Zoom>
    )
}

export default DownMenuFriendChat