import React from 'react'

import {Person, TrendingUp, Group, Email, Close} from '@material-ui/icons/'
import Zoom from '@material-ui/core/Zoom'

import LeftMenuMyProfile from './LeftMenuMyProfile/LeftMenuMyProfile'

function LeftMenu() {
    return (
        <div className='LeftMenu'>
            <div className='LeftMenuHeader'>
                <h2>Menu</h2>
                <Zoom in='true'>
                    <div className='LeftMenuCloseButton' onClick={() => {document.querySelector('.Left').classList.remove('isLeftClicked'); document.querySelector('.LeftMenu').classList.remove('isLeftMenuClicked')}}>
                        <Close style={{fill: 'white'}} />
                    </div>
                </Zoom>
            </div>
            <LeftMenuMyProfile/>
            <Zoom in='true'>
                <ul>
                    <li>
                        <a>
                            <Person style={{fill: 'white'}}/>
                            <h4>Profile</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <TrendingUp style={{fill: 'white'}}/>
                            <h4>Trending</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Group style={{fill: 'white'}}/>
                            <h4>Friends</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Email style={{fill: 'white'}}/>
                            <h4>Messages</h4>
                        </a>
                    </li>
                </ul>
            </Zoom>
            <footer>
                <p> Made with ❤ by CuscuzComCharque Productions </p>
            </footer>
        </div>
    )
}

export default LeftMenu