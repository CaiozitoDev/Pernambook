import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './HomePage/HomePage'
import Search from './SearchPage/SearchPage'
import Friends from './FriendsPage/FriendsPage'
import Messages from './MessagesPage/MessagesPage'
import Profile from './ProfilePage/ProfilePage'

import Login from './login'

function AppSmartphone() {
    return (
        <div className='AppSmartphone'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
                <Route exact path='/friends' component={Friends} />
                <Route exact path='/messages' component={Messages} />
                <Route exact path='/profile' component={Profile} />

                <Route exact path='/login' component={Login} />
            </Router>
        </div>
    )
}

export default AppSmartphone
