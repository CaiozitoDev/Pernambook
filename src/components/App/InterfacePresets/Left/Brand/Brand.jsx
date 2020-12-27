import React from 'react'

import {Link} from 'react-router-dom'

function Brand({isHomePage}) {
    return isHomePage ? 
        <Link to='/home' style={{textDecoration: 'none'}}>
            <div className='Brand'>
                <img src={process.env.PUBLIC_URL + '/BH-bull-white-3.png'} alt='img' />
                <h1>Cornobook</h1>
            </div>
        </Link>
     :
    <div className='Brand'>
        <img src={process.env.PUBLIC_URL + '/BH-bull-white-3.png'} alt='img' />
        <h1>Cornobook</h1>
    </div>
}

export default Brand