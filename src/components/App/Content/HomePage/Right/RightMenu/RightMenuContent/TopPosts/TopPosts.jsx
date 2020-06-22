import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopPost(props) {
    return (
        <Zoom in={true} timeout={1500}>
            <a href={`/comments/${props.postdata.postid}`}>
                <div className='TopPosts'>
                    <div className='TopPostHeader'>
                        <img src={props.postdata.headerphoto} className='PostUserIcon' alt='img' />
                        <h6>{props.postdata.headerusername}</h6>
                    </div>
                    <p><span className='Quotation'>"</span> {props.postdata.bodytext} <span className='Quotation'>"</span> </p>
                </div>
            </a>
        </Zoom>
    )
}

export default TopPost