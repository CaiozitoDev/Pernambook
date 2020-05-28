import React from 'react'

import Header from './Header/Header'
import Post from './Post/Post'

function PostArea() {
    return (
        <div className='PostArea'>
            <Header />
            <h1>Initial page</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostArea