import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'
import MyProfile from './MyProfile/MyProfile'

import slideAnimation from '../../../../functions/slideAnimation'

function LeftMenu() {
    return (
        <div className='LeftMenu' onLoad={() => slideAnimation('LeftMenu')}>
            <NewPostForm />
            <hr />
            <LeftOptions />
            <MyProfile />
            <hr />
        </div>
    )
}

export default LeftMenu