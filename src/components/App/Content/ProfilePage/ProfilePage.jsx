import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import UserProfile from './UserProfile/UserProfile'

import Zoom from '@material-ui/core/Zoom'

function ProfilePage() {
    return (
        <div className='ProfilePage'>
            <InterfacePresets />

            <Zoom in='true' timeout={1000}>
                <div className='ProfileContent'>
                    <h1>Profile</h1>
                    <UserProfile />
                </div>
            </Zoom>
        </div>
    )
}

export default ProfilePage