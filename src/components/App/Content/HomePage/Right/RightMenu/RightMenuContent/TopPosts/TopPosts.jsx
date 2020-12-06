import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopPost(props) {
    const text = props.postdata.content
    
    return (
        <Zoom in timeout={1500}>
            <Link to={`/comments/${props.postdata.postId}`}>
                <div className='TopPosts'>
                    <div className='TopPostHeader'>
                        <img src={props.postdata.photo} className='PostUserIcon' alt='img' />
                        <h6>{props.postdata.username}</h6>
                    </div>
                    <p><span className='Quotation'>"</span> {text.substring(0, 100)} {text.length > 100 && '...'} <span className='Quotation'>"</span> </p>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopPost