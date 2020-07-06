import React, { useState, useEffect } from 'react'

import {PersonAdd, EmojiPeople, Check, Chat} from '@material-ui/icons'

import api from '../../../../../../../services/API_CONFIG'
import jwt from 'jsonwebtoken'

function PostHeader(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [areFriends, setAreFriends] = useState(false)

    const [isDisabled, setIsDisabled] = useState(false)

    const [activeIcon, setActiveIcon] = useState(<PersonAdd />)

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    useEffect(() => {
        api.post('/arefriends', {postuserid: props.postuserid, db_user_id: db_user_id}).then(response => {
            if(response.data == 'sent') {
                setActiveIcon(<Check />)
                setIsDisabled(true)
            } else {
                setAreFriends(response.data)
            }
        })
        .catch(err => {console.log(err)})
    }, [])

    function handleFriendRequest() {
        setIsDisabled(true)

        if(!areFriends) {
            api.patch('/friendrequest', {db_user_id: db_user_id, postuserid: props.postuserid})
            .then(response => {
                console.log(response.data)
                setActiveIcon(<Check />)
            })
            .catch(err => {console.log(err)})
        } else {
            setIsDisabled(false)
        }
    }

    function handleChatFriend() {
        setIsDisabled(true)

        api.get(`/chat?db_user_id=${db_user_id}&userid=${props.postuserid}`).then(response => {
            setIsDisabled(false)
            window.location = '/chat/' + response.data
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='PostHeader'>
            <img src={props.src} className='PostUserIcon' alt='img' />
            <a href={`/profile/${props.username}`}>
                <h5>{props.username}</h5>
            </a>
            {props.postuserid !== db_user_id &&
                <div style={{margin: '0'}}>
                    <button className='ChatFriendButton' disabled={isDisabled} onClick={handleChatFriend}>
                        <Chat />
                    </button>
                    <button className='AddFriendPost' onClick={handleFriendRequest} disabled={isDisabled}>
                        {!areFriends ? activeIcon : <div> Friends <EmojiPeople /> </div>}
                    </button>
                </div>
            }
        </div>
    )
}

export default PostHeader