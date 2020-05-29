import React from 'react'

import HeaderMyProfile from './HeaderMyProfile/HeaderMyProfile'
import LogOff from './LogOff/LogOff'


function Header() {
    return (
        <div className='Header'>
            <HeaderMyProfile/>
            <LogOff />
        </div>
    )
}

export default Header