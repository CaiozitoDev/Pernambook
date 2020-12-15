import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import PostArea from '../../../PostArea/PostArea'
import Right from './Right/Right'

function HomePage() {
    if(typeof Notification == 'function') {
        setTimeout(Notification.requestPermission, 5000)
    }
    
    return (
        <div className='HomePage'>
            <InterfacePresets />

            <PostArea device='desktop' />
            <Right />
        </div>
    )
}

export default HomePage