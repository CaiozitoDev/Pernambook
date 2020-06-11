import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import PostHeader from './PostHeader/PostHeader'
import PostBody from './PostBody/PostBody'
import PostFooter from './PostFooter/PostFooter'

function Post(props) {
    

    return (
        <Zoom in={true} timeout={1000}>
            <div className='Post'>
                <PostHeader />
                <PostBody postbodytext={props.postbodytext}/>
                <PostFooter />
            </div>
        </Zoom>
    )
}

export default Post