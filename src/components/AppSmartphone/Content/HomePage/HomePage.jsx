import React from 'react'

import PostArea from '../../../PostArea/PostArea'

import MobileInterfacePresets from '../../InterfacePresets/InterfacePresets'

function Home() {
    if(typeof Notification == 'function') {
        setTimeout(Notification.requestPermission, 5000)
    }

    return (
        <div className='Home'>
            <MobileInterfacePresets searchMenu={false} isHomePage/>

            <PostArea device='smartphone'/>
        </div>
    )
}

export default Home