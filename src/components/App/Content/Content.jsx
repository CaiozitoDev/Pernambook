import React, { useState } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'

import LoadingPage from '../../Loading'

import axios from 'axios'

function Content() {
    const [isAuth, setIsAuth] = useState(undefined)

    axios.post('/auth', {local_token: localStorage.getItem('local_token')})
        .then(response => {
            console.log(response.data)
            setIsAuth(response.data.authorized)
        })
        .catch((err) => {
            console.log(err)
        })

    if(isAuth == undefined) {
        return <LoadingPage />
    } else {
        return (
            <Router>
                <Route exact path='/home' component={() => {return isAuth ? <HomePage /> : <div>Connection not authorized</div>}} />
                <Route exact path='/profile' component={() => {return isAuth ? <ProfilePage /> : <div>Connection not authorized</div>}} />
                <Route exact path='/messages' component={() => {return isAuth ? <MessagesPage /> : <div>Connection not authorized</div>}}/>
                <Route exact path='/friends' component={() => {return isAuth ? <FriendsPage /> : <div>Connection not authorized</div>}}/>
            </Router>
        )
    }
}

export default Content