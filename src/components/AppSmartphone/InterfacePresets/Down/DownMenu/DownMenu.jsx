import React from 'react'

import {Home, Search, Email, Group} from '@material-ui/icons'

import Zoom from '@material-ui/core/Zoom'

import jwt from 'jsonwebtoken'

function DownMenu() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    return (
        <div className='DownMenu'>
            <div className='DownMenuComponents'>
                <Zoom in={true}>
                    <ul>
                        <a href='/home'>
                            <li>
                                <Home /> 
                            </li>
                        </a>
                        <a href='/search'>
                            <li>
                                <Search />
                            </li>
                        </a>
                        <a href={`/friends/${db_user_id}`}>
                            <li>
                                <Group />
                            </li>
                        </a>
                        <a href={`/messages/${db_user_id}`}>
                            <li>
                                <Email />
                            </li>
                        </a>
                    </ul>
                </Zoom>
            </div>
        </div>
    )
}

export default DownMenu