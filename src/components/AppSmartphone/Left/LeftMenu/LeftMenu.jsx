import React from 'react'

import {Person, TrendingUp, Group, Email, Close} from '@material-ui/icons/'
import Zoom from '@material-ui/core/Zoom'

import MyProfile from './MyProfile/MyProfile'

function LeftMenu() {
    return (
        <div className='LeftMenu'>
            <div className='LeftMenuHeader'>
                <h2>Menu</h2>
                <Zoom in='true'>
                    <div className='LeftMenuCloseButton' onClick={() => {document.querySelector('.Left').style.display = 'none'}}>
                        <Close style={{fill: 'white'}} />
                    </div>
                </Zoom>
            </div>
            <MyProfile />
            <Zoom in='true'>
                <ul>
                    <li>
                        <a>
                            <Person />
                            <h4>Profile</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <TrendingUp />
                            <h4>Trending</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Group />
                            <h4>Friends</h4>
                        </a>
                    </li>
                    <li>
                        <a>
                            <Email  />
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