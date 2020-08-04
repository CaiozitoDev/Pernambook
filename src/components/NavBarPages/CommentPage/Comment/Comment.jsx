import React from 'react'

import {Zoom} from '@material-ui/core'

import {Link} from 'react-router-dom'

function Comment(props) {
    return (
        <Zoom in={true} timeout={800}>
            <div className='Comment'>
                <Link to={`/profile/${props.data.username}`}>
                    <div className='CommentHeader'>
                        <img src={props.data.userPhoto} className='PostUserIcon' />
                        <h6>{props.data.username}</h6>
                    </div>
                </Link>
                <div className='CommentBody'>
                    <p>{props.data.bodytext}</p>
                </div>
            </div>
        </Zoom>
    )
}

export default Comment