import React from 'react'

function Brand() {
    return (
        <div className='Brand'>
            <img src={process.env.PUBLIC_URL + '/BH-bull-white-3.png'} alt='img' />
            <h1>Cornobook</h1>
        </div>
    )
}

export default Brand