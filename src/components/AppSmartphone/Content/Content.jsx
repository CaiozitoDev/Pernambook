import React, { useState, useEffect } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'
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
                <Route exact path='/search' component={() => {return isAuth ? <SearchPage /> : <NotAuthorizedPage />}} />
                <Route exact path='/friends' component={() => {return isAuth ? <FriendsPage /> : <NotAuthorizedPage />}} />
                <Route exact path='/messages' component={() => {return isAuth ? <MessagesPage /> : <NotAuthorizedPage />}} />
                <Route exact path='/profile' component={() => {return isAuth ? <ProfilePage /> : <NotAuthorizedPage />}} />
            </Router>
        )
    }
}

export default Content