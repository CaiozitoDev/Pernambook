import React, { useState, useEffect } from 'react'

import {Zoom} from '@material-ui/core'

import FriendRequest from './FriendRequest/FriendRequest'

import api from '../../../../services/API_CONFIG'

import socket from '../../../../services/SOCKET_CONFIG'

function FriendRequestArea({id}) {
    const [requestArray, setRequestArray] = useState([])

    useEffect(() => {
        getFriendRequests()

        socket.on(`${id}_friendrequest`, () => {
            getFriendRequests()
        })
    }, [])

    function getFriendRequests() {
        api.post('/getfriendrequest', {db_user_id: id}).then(response => {
            setRequestArray(response.data.friendRequests)
        })
        .catch(err => {console.log(err)})

    }

    return (
        <Zoom in timeout={1000}>
            <div className='FriendRequestArea'>
                <h5>Friend requests: {requestArray.length}</h5>
                <div className='FriendRequestList'>
                    {requestArray.map(request => {
                        return <FriendRequest requestdata={request} id={id} />
                    })}
                </div>
            </div>
        </Zoom>
    )
}

export default FriendRequestArea