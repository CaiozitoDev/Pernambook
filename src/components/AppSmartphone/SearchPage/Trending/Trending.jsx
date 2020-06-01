import React from 'react'

import TopPost from './TopPost/TopPost'

function Trending() {
    return (
        <div className='Trending'>
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

export default Trending