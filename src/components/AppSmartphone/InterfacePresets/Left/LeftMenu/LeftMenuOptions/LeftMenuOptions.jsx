import React from 'react'

import {Person, TrendingUp, Group, Email} from '@material-ui/icons'

import {Link} from 'react-router-dom'

function LeftMenuOptions(props) {
    return (
        <div className='LeftMenuOptions'>
            <ul>
                <li>
                    <Link to={`/profile/${props.username}`}>
                        <Person style={{fill: 'white'}}/>
                        <h4>Profile</h4>
                    </Link>
                </li>
                <li>
                    <Link to='/search'>
                        <TrendingUp style={{fill: 'white'}}/>
                        <h4>Trending</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`/friends/${props.username}`}>
                        <Group style={{fill: 'white'}}/>
                        <h4>Friends</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`/messages/${props.username}`}>
                        <Email style={{fill: 'white'}}/>
                        <h4>Messages</h4>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenuOptions