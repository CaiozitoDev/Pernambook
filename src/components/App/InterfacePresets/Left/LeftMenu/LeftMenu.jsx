import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'
import MyProfile from './MyProfile/MyProfile'

import jwt from 'jsonwebtoken'

import {Slide} from '@material-ui/core'

function LeftMenu() {
    const {db_user_id, username} = jwt.decode(localStorage.getItem('local_token'))
    return (
        <Slide direction='up' in={true} timeout={1000} mountOnEnter>
            <div className='LeftMenu'>
                <NewPostForm id={db_user_id} />
                <hr />
                <LeftOptions username={username} id={db_user_id} />
                <MyProfile username={username} />
                <hr />
            </div>
        </Slide>
    )
}

export default LeftMenu