import React, { useState, useEffect } from 'react'

import {Zoom} from '@material-ui/core'

import FriendRequest from './FriendRequest/FriendRequest'

import api from '../../../../../services/API_CONFIG'

function FriendRequestArea(props) {
    const [requestArray, setRequestArray] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)

        api.post('/getfriendrequest', {db_user_id: props.id}).then(response => {
            setRequestArray(response.data)
            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <Zoom in={true} timeout={1000}>
            <div className='FriendRequestArea'>
                <h5>Friend requests: {requestArray.length}</h5>
                <div className='FriendRequestList'>
                    {requestArray.map(request => {
                        return <FriendRequest requestdata={request} id={props.id} />
                    })}
                </div>
            </div>
        </Zoom>
    )
}

export default FriendRequestArea