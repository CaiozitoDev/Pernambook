import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'
import MyProfile from './MyProfile/MyProfile'

function LeftMenu() {
    return (
        <div className='LeftMenu'>
            <NewPostForm />
            <hr />
            <LeftOptions />
            <MyProfile />
            <hr />
        </div>
    )
}

export default LeftMenu