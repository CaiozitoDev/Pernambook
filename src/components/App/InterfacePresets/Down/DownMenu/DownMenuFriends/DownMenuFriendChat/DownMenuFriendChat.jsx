import React from 'react'

function DownMenuFriendChat(props) {
    return (
        <div className='DownMenuFriendChat'>
            <a href={`/chat/${props.data.chatid}`}>
                <img src={props.data.user.userPhoto} className='PostUserIcon'/>
            </a>
        </div>
    )
}

export default DownMenuFriendChat