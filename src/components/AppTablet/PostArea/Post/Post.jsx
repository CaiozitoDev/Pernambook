import React from 'react'

import PostHeader from './PostHeader/PostHeader'
import PostBody from './PostBody/PostBody'
import PostFooter from './PostFooter/PostFooter'

function Post() {
    

    return (
    <div className='Post'>
        <PostHeader />
        <PostBody />
        <PostFooter />
    </div>
    )
}

export default Post