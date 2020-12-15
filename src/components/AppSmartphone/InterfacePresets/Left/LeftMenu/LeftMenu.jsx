import React, { useContext, useEffect } from 'react'

import LeftMenuHeader from './LeftMenuHeader/LeftMenuHeader'
import LeftMenuMyProfile from './LeftMenuMyProfile/LeftMenuMyProfile'
import LeftMenuOptions from './LeftMenuOptions/LeftMenuOptions'

import {Slide} from '@material-ui/core'

import {AuthContext, SlideLeftMenuContext} from '../../../../Contexts'

function LeftMenu() {
    const {userData} = useContext(AuthContext)
    const {slideLeftMenu} = useContext(SlideLeftMenuContext)

    return (
        <Slide direction='right' in={slideLeftMenu} timeout={500} mountOnEnter unmountOnExit>
            <div className='LeftMenu'>
                <LeftMenuHeader />
                <LeftMenuMyProfile db_user_id={userData.db_user_id} />
                <LeftMenuOptions db_user_id={userData.db_user_id} />
                <ul className='nav' style={{margin: '0 auto'}}>
                    <li className='nav-item'>
                        <a href='https://github.com/CaioDev1' target='_blank' className='nav-link' style={{color: 'white'}}>GitHub</a>
                    </li>
                    <li className='nav-item'>
                        <a href='https://www.instagram.com/itsme_caio' target='_blank' className='nav-link' style={{color: 'white'}}>Support</a>
                    </li>
                </ul>
                <footer>
                    <p> Made with ❤ by CuscuzComCharque Productions </p>
                </footer>
            </div>
        </Slide>
    )
}

export default LeftMenu