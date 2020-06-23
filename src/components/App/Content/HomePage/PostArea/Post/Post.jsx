import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import PostHeader from './PostHeader/PostHeader'
import PostBody from './PostBody/PostBody'
import PostFooter from './PostFooter/PostFooter'

function Post(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Post'>
                <PostHeader 
                    username={props.postdata.headerusername}
                    src={props.postdata.headerphoto}
                    postuserid={props.postdata.userid}
                />
                <PostBody postbodytext={props.postdata.bodytext}/>
                <PostFooter postid={props.postdata._id} />
            </div>
        </Zoom>
    )
}

export default Post