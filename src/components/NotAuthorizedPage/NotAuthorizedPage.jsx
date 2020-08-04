import React from 'react'

import {Block} from '@material-ui/icons'

import {Link} from 'react-router-dom'

function NotAuthorizedPage() {
    return (
        <div className='NotAuthorizedPage'>
            <div className='NotAuthorizedContent'>
                <Block style={{fill: 'white'}} />
                <h1>Connection not authorized</h1>
                <h4>Please register on our website, if you're already registered, log in</h4>
                <div className='NotAuthorizedButtons'>
                    <Link to='/register'>
                        <button className='btn btn-lg btn-primary'>Register</button>
                    </Link>
                    <Link to='/login'>
                        <button className='btn btn-lg btn-danger'>Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default NotAuthorizedPage