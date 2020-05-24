import React from 'react'

import Post from './Post'

function PostArea() { //col-6 
    return (
        <div className='col-8 PostArea'>
            <h1>Initial page</h1>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}

export default PostArea