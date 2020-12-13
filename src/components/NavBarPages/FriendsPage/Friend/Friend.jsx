import React, { useState } from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Delete} from '@material-ui/icons'

import ChatFriendButton from '../../../ChatFriendButton'

import api from '../../../../services/API_CONFIG'

import {Link} from 'react-router-dom'

function Friend({db_user_id, friendData, url_userId}) {
    const [isDisabled, setIsDisabled] = useState(false)

    function deleteFriend() {
        setIsDisabled(true)

        api.delete(`/deletefriend?db_user_id=${db_user_id}&userid=${friendData.userId}`).then(response => {
            setIsDisabled(false)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <Zoom in timeout={1000}>
            <div className='Friend'>
                <li>
                    <Link to={`/profile/${friendData.userId}`} className='FriendUserInfo'>
                        <img src={friendData.photo} alt='img' />
                        <div className='UserInfo'>
                            <h4>{friendData.username}</h4>
                        </div>
                    </Link>
                    <div className='FriendButtons'>
                        {db_user_id !== friendData.userId &&
                            <ChatFriendButton db_user_id={db_user_id} postuserid={friendData.userId} />
                        }
                        {url_userId == db_user_id &&
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