import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopOnePost(props) {
    const text = props.postdata.content

    return (
        <Zoom in timeout={1500}>
            <Link to={`/comments/${props.postdata.postId}`}>
                <div className='TopOnePost'>
                    <div className='TopPostHeader'>
                        <span className='TopOneNumber'>#1</span>
                        <img src={props.postdata.photo} className='PostUserIcon' alt='img' />
                        <h5>{props.postdata.username}</h5>
                        <p>Top Post</p>
                    </div>
                    <p><span className='Quotation'>"</span> {text.substring(0, 100)} {text.length > 100 && '...'} <span className='Quotation'>"</span> </p>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopOnePost