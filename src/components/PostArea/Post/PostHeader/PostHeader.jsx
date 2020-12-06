import React, {useContext} from 'react'

import AreFriends from '../../../AreFriends'
import ChatFriendButton from '../../../ChatFriendButton'

import {Link} from 'react-router-dom'

import {AuthContext, PostContext} from '../../../Contexts'

function PostHeader() {
    const {db_user_id} = useContext(AuthContext)
    const {username, timestamp, photo, userId} = useContext(PostContext)

    return (
        <div className='PostHeader'>
            <img src={photo} className='PostUserIcon' alt='img' />
            <Link to={`/profile/${userId}`}>
                <h5>{username}</h5>
                <div className='PostHeaderDate'>{timestamp}</div>
            </Link>
            {userId !== db_user_id &&
                <div style={{margin: '0', display: 'flex'}}>
                    <ChatFriendButton db_user_id={db_user_id} postuserid={userId} />
                    <AreFriends db_user_id={db_user_id} postuserid={userId} />
                </div>
            }
        </div>
    )
}

export default PostHeader