import React, {useContext} from 'react'

import {PostContext} from '../../../Contexts'

function PostBody() {
    const {content} = useContext(PostContext)

    return (
        <div className='PostBody'>
           <p>{content}</p>
        </div>
    )
}

export default PostBody