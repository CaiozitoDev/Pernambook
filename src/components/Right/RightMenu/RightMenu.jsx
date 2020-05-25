import React from 'react'

import TopPost from './TopPost/TopPost'

function RightMenu() {
    return (
        <div className='RightMenu'>
            <h2>Most liked posts</h2>
            <TopPost />
            <TopPost />
            <TopPost />
        </div>
    )
}

export default RightMenu