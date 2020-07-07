import React, { useState, useEffect } from 'react'

import {PersonAdd, EmojiPeople, Check} from '@material-ui/icons'

import api from '../services/API_CONFIG'

function AreFriends(props) {
    const [areFriends, setAreFriends] = useState(false)

    const [isDisabled, setIsDisabled] = useState(false)

    const [activeIcon, setActiveIcon] = useState(<PersonAdd />)

    useEffect(() => {
        api.post('/arefriends', {postuserid: props.postuserid, db_user_id: props.db_user_id}).then(response => {
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
            api.patch('/friendrequest', {db_user_id: props.db_user_id, postuserid: props.postuserid})
            .then(response => {
                setActiveIcon(<Check />)
            })
            .catch(err => {console.log(err)})
        } else {
            setIsDisabled(false)
        }
    }

    return (
        <button className='AddFriendPost' onClick={handleFriendRequest} disabled={isDisabled}>
            {!areFriends ? activeIcon : <div> Friends <EmojiPeople /> </div>}
        </button>
    )
}

export default AreFriends