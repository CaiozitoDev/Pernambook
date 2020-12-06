import React from 'react'

import {Person, TrendingUp, Group, Email} from '@material-ui/icons'

import {Link} from 'react-router-dom'

function LeftMenuOptions({db_user_id}) {
    return (
        <div className='LeftMenuOptions'>
            <ul>
                <li>
                    <Link to={`/profile/${db_user_id}`}>
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
                    <Link to={`/friends/${db_user_id}`}>
                        <Group style={{fill: 'white'}}/>
                        <h4>Friends</h4>
                    </Link>
                </li>
                <li>
                    <Link to={`/messages/${db_user_id}`}>
                        <Email style={{fill: 'white'}}/>
                        <h4>Messages</h4>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default LeftMenuOptions