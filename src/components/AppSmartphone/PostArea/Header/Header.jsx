import React from 'react'

import MyProfile from './MyProfile/MyProfile'
import LogOff from './LogOff/LogOff'

function Header() {
    return (
        <div className='Header'>
            <MyProfile />
            <LogOff />
        </div>
    )
}

export default Header