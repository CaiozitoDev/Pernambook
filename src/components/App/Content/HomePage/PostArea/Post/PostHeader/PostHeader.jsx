import React from 'react'

function PostHeader(props) {

    return (
        <div className='PostHeader'>
            <img src={props.src} className='PostUserIcon' alt='img' />
            <a href=''>
                <h5>{props.username}</h5>
            </a>
        </div>
    )
}

export default PostHeader