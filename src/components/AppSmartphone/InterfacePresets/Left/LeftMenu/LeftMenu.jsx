import React from 'react'

import LeftMenuHeader from './LeftMenuHeader/LeftMenuHeader'
import LeftMenuMyProfile from './LeftMenuMyProfile/LeftMenuMyProfile'
import LeftMenuOptions from './LeftMenuOptions/LeftMenuOptions'

import jwt from 'jsonwebtoken'

function LeftMenu() {
    const {db_user_id, username} = jwt.decode(localStorage.getItem('local_token'))

    return (
        <div className='LeftMenu'>
            <LeftMenuHeader />
            <LeftMenuMyProfile username={username} />
            <LeftMenuOptions username={username} />
            <footer>
                <p> Made with ❤ by CuscuzComCharque Productions </p>
            </footer>
        </div>
    )
}

export default LeftMenu