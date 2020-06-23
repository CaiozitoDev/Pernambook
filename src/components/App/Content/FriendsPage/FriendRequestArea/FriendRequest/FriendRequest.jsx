import React, { useState } from 'react'

import {Zoom} from '@material-ui/core'

import axios from 'axios'
import jwt from 'jsonwebtoken'

function FriendRequest(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [isDisabled, setIsDisabled] = useState(false)

    function handleRequestResult(result) {
        setIsDisabled(true)

        axios.post('/friendrequestresult', {result: result, db_user_id: db_user_id, userid: props.requestdata.userid})
            .then(response => {

            })
            .catch(err => {console.log(err)})
    }

    return (
        <Zoom in={true} timeout={1000}>
            <div className='FriendRequest'>
                <img src={props.requestdata.photo} className='PostUserIcon' />
                <div className='FriendRequestContent'>
                    <h6>{props.requestdata.username}</h6>
                    <div className='FriendRequestButtons'>
                        <button className='btn btn-sm btn-danger' onClick={() => {handleRequestResult(false)}} disabled={isDisabled}>
                            reject
                        </button>
                        <button className='btn btn-sm btn-success' onClick={() => {handleRequestResult(true)}} disabled={isDisabled}>
                            accept
                        </button>
                    </div>
                </div>
            </div>
        </Zoom>
    )
}

export default FriendRequest