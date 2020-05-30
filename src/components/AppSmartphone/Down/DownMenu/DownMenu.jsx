import React from 'react'

import {Home, Search, Email, Group} from '@material-ui/icons'

import Zoom from '@material-ui/core/Zoom'

function DownMenu() {
    return (
        <div className='DownMenu'>
            <div className='DownMenuComponents'>
                <Zoom in='true'>
                    <ul>
                        <a href=''>
                            <li>
                                <Home /> 
                            </li>
                        </a>
                        <a href=''>
                            <li>
                                <Search />
                            </li>
                        </a>
                        <a href=''>
                            <li>
                                <Group />
                            </li>
                        </a>
                        <a href=''>
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