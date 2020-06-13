import React from 'react'

import {Person, TrendingUp, Group, Email} from '@material-ui/icons'

function LeftMenuOptions(props) {
    return (
        <div className='LeftMenuOptions'>
            <ul>
                <li>
                    <a href={`/profile/${props.id}`}>
                        <Person style={{fill: 'white'}}/>
                        <h4>Profile</h4>
                    </a>
                </li>
                <li>
                    <a href='/search'>
                        <TrendingUp style={{fill: 'white'}}/>
                        <h4>Trending</h4>
                    </a>
                </li>
                <li>
                    <a href={`/friends/${props.id}`}>
                        <Group style={{fill: 'white'}}/>
                        <h4>Friends</h4>
                    </a>
                </li>
                <li>
                    <a href={`/messages/${props.id}`}>
                        <Email style={{fill: 'white'}}/>
                        <h4>Messages</h4>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenuOptions