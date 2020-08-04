import React from 'react'

import jwt from 'jsonwebtoken'

import AreFriends from '../../../AreFriends'
import ChatFriendButton from '../../../ChatFriendButton'

import {Link} from 'react-router-dom'

function PostHeader(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))
    return (
        <div className='PostHeader'>
            <img src={props.src} className='PostUserIcon' alt='img' />
            <Link to={`/profile/${props.username}`}>
                <h5>{props.username}</h5>
                <div className='PostHeaderDate'>{props.date.substring(0, 10)}</div>
            </Link>
            {props.postuserid !== db_user_id &&
                <div style={{margin: '0', display: 'flex'}}>
                    <ChatFriendButton db_user_id={db_user_id} postuserid={props.postuserid} />
                    <AreFriends db_user_id={db_user_id} postuserid={props.postuserid} />
                </div>
            }
        </div>
    )
}

export default PostHeader