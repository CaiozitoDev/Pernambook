import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import FriendRequestArea from './FriendRequestArea/FriendRequestArea'
import Friend from './Friend/Friend'

function FriendsPage() {
    return (
        <div className='FriendsPage'>
            <InterfacePresets />

            <div className='FriendsContent'>
                <h1>Friends</h1>
                <FriendRequestArea />
                
                <Friend />
                <Friend />
                <Friend />
                <Friend />
                <Friend />
            </div>
        </div> 
    )
}

export default FriendsPage