import React from 'react'



import {Home, Person, Email} from '@material-ui/icons'

function ListConfigs() {
    return (
        <div className='ListConfigs'>
            <ul>
                <li>
                    <Home />
                    <a href='.Header'> <h4>Home page</h4> </a>
                </li>
                <li id='ListConfigsProfile'>
                    <Person />
                    <h4>Profile</h4>
                </li>
                <li>
                    <Email />
                    <h4>Messages</h4>
                </li>
            </ul>
        </div>
    )
}

export default ListConfigs