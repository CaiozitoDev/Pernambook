import React from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import PostArea from './PostArea/PostArea'
import Right from './Right/Right'

function HomePage() {
    return (
        <div className='HomePage'>
            <InterfacePresets />

            <PostArea />
            <Right />
        </div>
    )
}

export default HomePage