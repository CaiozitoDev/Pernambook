import React from 'react'



import {Home, Person, Email, Group} from '@material-ui/icons'

function ListConfigs() {
    return (
        <div className='ListConfigs'>
            <ul>
                <li>
                    <Home />
                    <a href='/'> <h4>Home page</h4> </a>
                </li>
                <li id='ListConfigsProfile'>
                    <Person />
                    <a href=''> <h4>Profile</h4> </a>
                </li>
                <li>
                    <Email />
                    <a href=''> <h4>Messages</h4> </a>
                </li>
                <li>
                    <Group />
                    <a href=''> <h4>Friends</h4> </a>
                </li>
            </ul>
        </div>
    )
}

export default ListConfigs