import React from 'react'

import Header from './Header/Header'
import LeftMenu from './PostArea/LeftMenu/LeftMenu'
import PostArea from './PostArea/PostArea'

function Main() {
    return (
        <div className='col-9 Main'>
            <Header />
            <div className='row Mainrow'>
                <LeftMenu />
                <PostArea />
            </div>
        </div>
    )
}

export default Main