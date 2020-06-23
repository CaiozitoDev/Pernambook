import React, { useState, useEffect } from 'react'

import {PersonAdd, EmojiPeople} from '@material-ui/icons'

import axios from 'axios'
import jwt from 'jsonwebtoken'

function PostHeader(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [areFriends, setAreFriends] = useState(false)

    useEffect(() => {
        axios.post('/arefriends', {postuserid: props.postuserid, db_user_id: db_user_id}).then(response => {
            setAreFriends(response.data)
        })
        .catch(err => {console.log(err)})
    })

    function handleFriendRequest() {
        axios.patch('/friendrequest', {db_user_id: db_user_id, postuserid: props.postuserid})
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {console.log(err)})
    }

    return (
        <div className='PostHeader'>
            <img src={props.src} className='PostUserIcon' alt='img' />
            <a href={`/profile/${props.username}`}>
                <h5>{props.username}</h5>
            </a>
            <div className='AddFriendPost' onClick={handleFriendRequest}>
            {!areFriends ? <PersonAdd /> : <div> Friends <EmojiPeople /> </div>}
            </div>
        </div>
    )
}

export default PostHeader