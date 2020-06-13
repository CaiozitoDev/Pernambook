import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'
import MyProfile from './MyProfile/MyProfile'

import slideAnimation from '../../../../functions/slideAnimation/slideAnimation'

import jwt from 'jsonwebtoken'

function LeftMenu() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))
    return (
        <div className='LeftMenu' onLoad={() => slideAnimation('LeftMenu')}>
            <NewPostForm id={db_user_id} />
            <hr />
            <LeftOptions id={db_user_id} />
            <MyProfile id={db_user_id} />
            <hr />
        </div>
    )
}

export default LeftMenu