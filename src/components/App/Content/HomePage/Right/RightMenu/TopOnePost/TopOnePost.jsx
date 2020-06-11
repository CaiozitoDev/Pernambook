import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function TopOnePost() {
    return (
        <Zoom in={true} timeout={1500}>
            <div className='TopOnePost'>
                <div className='TopPostHeader'>
                    <span className='TopOneNumber'>#1</span>
                    <img src={window.location.origin + '/fds/EXq0a0EXQAAUmjt.jpg'} className='PostUserIcon' alt='img' />
                    <h6>Caio Felipe</h6>
                    <p>@CaioReidaFarofa</p>
                </div>
                <p><span className='Quotation'>"</span> Some quick example text to build on the card title and make up the bulk of the card's content. <span className='Quotation'>"</span> </p>
            </div>
        </Zoom>
    )
}

export default TopOnePost