import React, { useState } from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Delete} from '@material-ui/icons'

import ChatFriendButton from '../../../../ChatFriendButton'

import api from '../../../../../services/API_CONFIG'

function Friend(props) {
    const [isDisabled, setIsDisabled] = useState(false)

    function deleteFriend() {
        setIsDisabled(true)

        api.delete(`/deletefriend?db_user_id=${props.id}&userid=${props.frienddata.userid}`).then(response => {
            console.log(response.data)
            setIsDisabled(false)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <Zoom in={true} timeout={1000}>
            <div className='Friend'>
                <li>
                    <a href={`/profile/${props.frienddata.username}`} className='FriendUserInfo'>
                        <img src={props.frienddata.photo} alt='img' />
                        <div className='UserInfo'>
                            <h3>{props.frienddata.username}</h3>
                        </div>
                    </a>
                    <div className='FriendButtons'>
                        {props.id !== props.frienddata.userid &&
                            <ChatFriendButton db_user_id={props.id} postuserid={props.frienddata.userid} />
                        }
                        {props.url_username == props.username &&
                            <button className='DeleteFriendButton' onClick={deleteFriend} disabled={isDisabled}>
                                <Delete />
                            </button>
                        }
                    </div>
                </li>
            </div>
        </Zoom>
    )
}

export default Friend