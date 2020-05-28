import React from 'react'

import {Home, Person, Email, Group} from '@material-ui/icons'

import slideAnimation from '../../../functions/slideAnimation'

function DownMenu() {
    return (
        <div className='DownMenu'>
            <div className='DownMenuComponents'>
                <ul>
                    <li>
                        <Home /> 
                    </li>
                    <li>
                        <Person />
                    </li>
                    <li>
                        <Group />
                    </li>
                    <li>
                        <Email />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DownMenu