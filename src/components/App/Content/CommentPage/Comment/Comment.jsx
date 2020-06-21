import React from 'react'

function Comment(props) {
    return (
        <div className='Comment'>
            <div className='CommentHeader'>
                <img src={props.data.userPhoto} className='PostUserIcon' />
                <h6>{props.data.username}</h6>
            </div>
            <div className='CommentBody'>
                <p>{props.data.bodytext}</p>
            </div>
        </div>
    )
}

export default Comment