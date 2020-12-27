import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopPost(props) {
    return (
        <Zoom in timeout={1000}>
            <Link to={`/comments/${props.postdata._id}`} style={{textDecoration: 'none'}}>
                <div className='TopPost'>
                    <div className='TopPostHeader'>
                        <img src={props.postdata.photo} className='PostUserIcon' alt='img' />
                        <h6>{props.postdata.username}</h6>
                    </div>
                    <p><span className='Quotation'>"</span> {props.postdata.content} <span className='Quotation'>"</span> </p>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopPost