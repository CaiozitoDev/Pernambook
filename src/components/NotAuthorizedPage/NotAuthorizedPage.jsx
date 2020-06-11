import React from 'react'

import {Block} from '@material-ui/icons'

function NotAuthorizedPage() {
    return (
        <div className='NotAuthorizedPage'>
            <div className='NotAuthorizedContent'>
                <Block style={{fill: 'white'}} />
                <h1>Connection not authorized</h1>
                <h4>Please register on our website, if you're already registered, log in</h4>
                <div className='NotAuthorizedButtons'>
                    <a href='/register'>
                        <button className='btn btn-lg btn-primary'>Register</button>
                    </a>
                    <a href='/login'>
                        <button className='btn btn-lg btn-danger'>Log In</button>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default NotAuthorizedPage