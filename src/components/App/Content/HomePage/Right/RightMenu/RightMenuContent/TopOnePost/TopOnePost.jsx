import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopOnePost(props) {
    return (
        <Zoom in={true} timeout={1500}>
            <a href={`/comments/${props.postdata.postid}`}>
                <div className='TopOnePost'>
                    <div className='TopPostHeader'>
                        <span className='TopOneNumber'>#1</span>
                        <img src={props.postdata.headerphoto} className='PostUserIcon' alt='img' />
                        <h5>{props.postdata.headerusername}</h5>
                        <p>Top Post</p>
                    </div>
                    <p><span className='Quotation'>"</span> {props.postdata.bodytext} <span className='Quotation'>"</span> </p>
                </div>
            </a>
        </Zoom>
    )
}

export default TopOnePost