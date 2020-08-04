import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import {Link} from 'react-router-dom'

function TopTrendingPost(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <Link to={`/comments/${props.postdata.postid}`}>
                <div className='TopTrendingPost'>
                    <span className='TopOneSpan'>#1</span>
                    <img src={props.postdata.headerphoto} />
                    <h2>{props.postdata.headerusername}</h2>
                    <h5><span className='Quotation'>"</span> {props.postdata.bodytext} <span className='Quotation'>"</span> </h5>
                </div>
            </Link>
        </Zoom>
    )
}

export default TopTrendingPost