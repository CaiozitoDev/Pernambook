import React from 'react'

import Brand from '../InterfacePresets/Left/Brand/Brand'

function WelcomePage() {
    return (
        <div className='WelcomePage'>
            <div className='WelcomeContent'>
                <Brand />
                <h1>"The social media to share your gaias"</h1>
                <h5>- Caio Felipe 2020</h5>
                <div className='WelcomeButtons'>
                    <a href='/register' className='nav-link'><button className='btn btn-lg btn-primary'>Register</button></a>
                    <a href='/login' className='nav-link'><button className='btn btn-lg btn-outline-success'>Log In</button></a>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage