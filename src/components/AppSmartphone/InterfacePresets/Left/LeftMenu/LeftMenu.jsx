import React, {useEffect} from 'react'

import LeftMenuHeader from './LeftMenuHeader/LeftMenuHeader'
import LeftMenuMyProfile from './LeftMenuMyProfile/LeftMenuMyProfile'
import LeftMenuOptions from './LeftMenuOptions/LeftMenuOptions'

import jwt from 'jsonwebtoken'

function LeftMenu() {
    const {username} = jwt.decode(localStorage.getItem('local_token'))

    useEffect(() => {
        console.log(document.querySelector('.LeftMenu').className)
    })

    return (
        <div className='LeftMenu'>
            <LeftMenuHeader />
            <LeftMenuMyProfile username={username} />
            <LeftMenuOptions username={username} />
            <ul className='nav' style={{margin: '0 auto'}}>
                <li className='nav-item'>
                    <a href='https://github.com/CaiozitoDev' target='_blank' className='nav-link' style={{color: 'white'}}>GitHub</a>
                </li>
                <li className='nav-item'>
                    <a href='https://www.instagram.com/itsme_caio/?hl=pt-br' target='_blank' className='nav-link' style={{color: 'white'}}>Support</a>
                </li>
            </ul>
            <footer>
                <p> Made with ❤ by CuscuzComCharque Productions </p>
            </footer>
        </div>
    )
}

export default LeftMenu