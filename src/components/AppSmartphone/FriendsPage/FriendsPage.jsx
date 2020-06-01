import React from 'react'

import {InterfacePresets} from '../InterfacePresets/InterfacePresets'

import FriendsMenu from './FriendsMenu/FriendsMenu'

function Friends() {
    return (
        <div className='Friends'>
            <InterfacePresets title='Friends' />

            <div className='FriendsContent'>
                <FriendsMenu />
            </div>
        </div>
    )
}

export default Friends