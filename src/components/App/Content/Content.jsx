import React, { useState, useEffect } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'

import LoadingPage from '../../LoadingPage/Loading'

import NotAuthorizedPage from '../../NotAuthorizedPage/NotAuthorizedPage'

import axios from 'axios'

function Content() {
    const [isAuth, setIsAuth] = useState(undefined)

    useEffect(() => {
        axios.post('/auth', {local_token: localStorage.getItem('local_token')})
            .then(response => {
                console.log(response.data)
                setIsAuth(response.data.authorized)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    if(isAuth == undefined) {
        return <LoadingPage />
    } else {
        return (
            <Router>
                <Route exact path='/home' component={() => {return isAuth ? <HomePage /> : <NotAuthorizedPage />}} />
                <Route exact path='/profile/:id' component={() => {return isAuth ? <ProfilePage /> : <NotAuthorizedPage />}} />
                <Route exact path='/messages/:id' component={() => {return isAuth ? <MessagesPage /> : <NotAuthorizedPage />}}/>
                <Route exact path='/friends/:id' component={() => {return isAuth ? <FriendsPage /> : <NotAuthorizedPage />}}/>
            </Router>
        )
    }
}

export default Content