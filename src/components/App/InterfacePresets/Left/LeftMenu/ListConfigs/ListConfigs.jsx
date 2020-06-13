import React from 'react'

import {Home, Person, Email, Group} from '@material-ui/icons'

function ListConfigs(props) {
    return (
        <div className='ListConfigs'>
            <ul>
                <a href='/home'>
                    <li>
                        <Home />
                        <h4>Home page</h4>
                    </li>
                </a>
                <a href={`/profile/${props.id}`}>
                    <li>
                        <Person />
                        <h4>Profile</h4>
                    </li>
                </a>
                <a href={`/messages/${props.id}`}>
                    <li>
                        <Email />
                        <h4>Messages</h4>
                    </li>
                </a>
                <a href={`/friends/${props.id}`}>
                    <li>
                        <Group />
                        <h4>Friends</h4>
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default ListConfigs