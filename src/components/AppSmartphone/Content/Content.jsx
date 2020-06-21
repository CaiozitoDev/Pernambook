import React, { useState, useEffect } from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import SearchPage from './SearchPage/SearchPage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'
import CommentPage from './CommentPage/CommentPage'

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

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} component={(props) => {return isAuth ? (<Component {...props} />) : (<NotAuthorizedPage />)}} />
    )

    if(isAuth == undefined) {
        return <LoadingPage />
    } else {
        return (
            <Router>
                <PrivateRoute exact path='/home' component={HomePage} />
                <PrivateRoute exact path='/search' component={SearchPage} />
                <PrivateRoute exact path='/profile/:username' component={ProfilePage} />
                <PrivateRoute exact path='/messages/:username' component={MessagesPage} />
                <PrivateRoute exact path='/friends/:username' component={FriendsPage} />
                <PrivateRoute exact path='/comments/:postid' component={CommentPage} />
            </Router>
        )
    }
}

export default Content