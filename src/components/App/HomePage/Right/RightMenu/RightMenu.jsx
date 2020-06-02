import React from 'react'

import TopOnePost from './TopOnePost/TopOnePost'
import TopPost from './TopPosts/TopPosts'

import slideAnimation from '../../../../functions/slideAnimation'

function RightMenu() {
    return (
        <div className='RightMenu' onLoad={() => {slideAnimation('RightMenu')}}>
            <h2>Most liked posts</h2>
            <div className='TopPostArea'>
                <TopOnePost />
                
                <TopPost />
                <TopPost />
                <TopPost />
                <TopPost />
            </div>
        </div>
    )
}

export default RightMenu