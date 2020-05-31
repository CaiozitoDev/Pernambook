import React from 'react'

function TopPost() {
    return (
        <div className='TopPost'>
            <div className='TopPostHeader'>
                <img src={window.location.origin + '/fds/EXq0a0EXQAAUmjt.jpg'} className='PostUserIcon' />
                <h6>Caio Felipe</h6>
                <p>@CaioReidaFarofa</p>
            </div>
            <p><span className='Quotation'>"</span> Some quick example text to build on the card title and make up the bulk of the card's content. <span className='Quotation'>"</span> </p>
        </div>
    )
}

export default TopPost