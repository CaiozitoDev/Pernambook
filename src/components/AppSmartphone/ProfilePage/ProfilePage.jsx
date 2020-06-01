import React from 'react'

import {InterfacePresets} from '../InterfacePresets/InterfacePresets'

import UserProfile from './UserProfile/UserProfile'

function Profile() {
    return (
        <div className='Profile'>
            <InterfacePresets title='Profile' />
            <div className='ProfileContent'>
                <UserProfile />
            </div>
        </div>
    )
}

export default Profile