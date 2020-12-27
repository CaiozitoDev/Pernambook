import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopTrendingPost(props) {
    return (
        <Zoom in timeout={1000}>
            <Link to={`/comments/${props.postdata._id}`} style={{textDecoration: 'none'}}>
                <div className='TopTrendingPost'>
                    <span className='TopOneSpan'>#1</span>
                    <img src={props.postdata.photo} />
                    <h2>{props.postdata.username}</h2>
                    <h5><span className='Quotation'>"</span> {props.postdata.content} <span className='Quotation'>"</span> </h5>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopTrendingPost