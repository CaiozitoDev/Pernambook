import React from 'react'

import Brand from '../App/InterfacePresets/Left/Brand/Brand'

import {Link} from 'react-router-dom'

import Zoom from '@material-ui/core/Zoom'

function WelcomePage() {
    if(localStorage.getItem('local_token')) {
        window.location = '/home'
   } else {
        return (
            <Zoom in={true} timeout={1000}>
                <div className='WelcomePage'>
                    <div className='WelcomeContent'>
                        <Brand />
                        <div className='WelcomeText'>
                            <h1>"The social media to share your gaias"</h1>
                            <h5>- Caio Felipe, 2020</h5>
                        </div>
                        <div className='WelcomeButtons'>
                            <Link to='/register' className='nav-link'><button className='btn btn-lg btn-primary'>Register</button></Link>
                            <Link to='/login' className='nav-link'><button className='btn btn-lg btn-outline-danger'>Log In</button></Link>
                        </div>
                    </div>
                </div>
            </Zoom>
        )
   }
}

export default WelcomePage