import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopPost(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <Link to={`/comments/${props.postdata.postid}`}>
                <div className='TopPost'>
                    <div className='TopPostHeader'>
                        <img src={props.postdata.headerphoto} className='PostUserIcon' alt='img' />
                        <h6>{props.postdata.headerusername}</h6>
                    </div>
                    <p><span className='Quotation'>"</span> {props.postdata.bodytext} <span className='Quotation'>"</span> </p>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopPost