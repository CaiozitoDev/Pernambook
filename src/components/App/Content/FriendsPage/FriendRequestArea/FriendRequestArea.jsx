import React, { useState, useEffect } from 'react'

import {Zoom} from '@material-ui/core'

import FriendRequest from './FriendRequest/FriendRequest'

import api from '../../../../../services/API_CONFIG'
import jwt from 'jsonwebtoken'

function FriendRequestArea() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))
    const [requestArray, setRequestArray] = useState([])

    useEffect(() => {
        api.post('/getfriendrequest', {db_user_id}).then(response => {
            setRequestArray(response.data)
        })
        .catch(err => {console.log(err)})
    })

    return (
        <Zoom in={true} timeout={1000}>
            <div className='FriendRequestArea'>
                <h5>Friend requests {requestArray.length}</h5>
                <div className='FriendRequestList'>
                    {requestArray.map(request => {
                        return <FriendRequest requestdata={request} />
                    })}
                </div>
            </div>
        </Zoom>
    )
}

export default FriendRequestArea