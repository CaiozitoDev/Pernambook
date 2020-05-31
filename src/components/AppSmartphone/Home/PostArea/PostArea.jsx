import React from 'react'

import Post from './Post/Post'

function PostArea() {
    return (
        <div className='PostArea'>
            <h1>Home page</h1>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostArea