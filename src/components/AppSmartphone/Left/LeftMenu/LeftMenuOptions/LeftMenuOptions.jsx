import React from 'react'

import {Person, TrendingUp, Group, Email} from '@material-ui/icons'

function LeftMenuOptions() {
    return (
        <div className='LeftMenuOptions'>
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
        </div>
    )
}

export default LeftMenuOptions