import React, { useState } from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Delete} from '@material-ui/icons'

import jwt from 'jsonwebtoken'
import api from '../../../../../services/API_CONFIG'

function Friend(props) {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [isDisabled, setIsDisabled] = useState(false)

    function deleteFriend() {
        setIsDisabled(true)

        api.delete(`/deletefriend?db_user_id=${db_user_id}&userid=${props.frienddata.userid}`).then(response => {
            console.log(response.data)
            setIsDisabled(false)
        })
        .catch(err => {console.log(err)})
    }
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Friend'>
                <li>
                    <a href={`/profile/${props.frienddata.username}`}>
                        <img src={props.frienddata.photo} alt='img' />
                        <div className='UserInfo'>
                            <h3>{props.frienddata.username}</h3>
                        </div>
                    </a>
                    <button className='DeleteFriend' onClick={deleteFriend} disabled={isDisabled}>
                        <Delete />
                    </button>
                </li>
            </div>
        </Zoom>
    )
}

export default Friend