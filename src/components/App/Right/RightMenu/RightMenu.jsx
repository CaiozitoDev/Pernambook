import React from 'react'

import TopPost from './TopPost/TopPost'

import slideAnimation from '../../../functions/slideAnimation'

function RightMenu() {

    return (
        <div className='RightMenu' onLoad={() => {slideAnimation('RightMenu')}}>
            <h2>Most liked posts</h2>
            <div className='TopPostArea'>
                <TopPost />
                <TopPost />
                <TopPost />
                <TopPost />
            </div>
        </div>
    )
}

export default RightMenu