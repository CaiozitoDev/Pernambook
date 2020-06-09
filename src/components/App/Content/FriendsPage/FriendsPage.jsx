import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import Friend from './Friend/Friend'

function FriendsPage() {
    return (
        <div className='FriendsPage'>
            <InterfacePresets />

            <div className='FriendsContent'>
                <h1>Friends</h1>
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