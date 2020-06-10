import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopTrendingPost() {
    return (
        <div className='TopTrendingPost'>
            <span className='TopOneSpan'>#1</span>
            <img src={window.location.origin + '/fds/EWkuzXjWkAAMRae.jpg'} />
            <h3><span className='Quotation'>"</span> Some quick example text to build on the card title and make up the bulk of the card's content. <span className='Quotation'>"</span> </h3>
        </div>
    )
}

export default TopTrendingPost