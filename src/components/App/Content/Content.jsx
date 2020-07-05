import React, { useState, useEffect } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'
import CommentPage from './CommentPage/CommentPage'
import ChatPage from './ChatPage/ChatPage'

import LoadingPage from '../../LoadingPage/Loading'

import NotAuthorizedPage from '../../NotAuthorizedPage/NotAuthorizedPage'

import api from '../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

function Content() {
    const {username} = jwt.decode(localStorage.getItem('local_token'))
    username.replace(' ', '%20')

    const [isAuth, setIsAuth] = useState(undefined)

    useEffect(() => {
        api.post('/auth', {local_token: localStorage.getItem('local_token')})
            .then(response => {
                console.log(response.data)
                setIsAuth(response.data.authorized)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    const PrivateRoute = ({component: Component, ...rest}) => {
        return <Route {...rest} render={(props) => {return isAuth ? (<Component {...props} />) : (<NotAuthorizedPage />)}} />
    }

    if(isAuth == undefined) {
        return <LoadingPage />
    } else {
        return (
            <Router>
                <PrivateRoute exact path='/home' component={HomePage} />
                <PrivateRoute exact path='/profile/:username' component={ProfilePage} />
                <PrivateRoute exact path='/messages' component={MessagesPage} />
                <PrivateRoute exact path='/friends/:username' component={FriendsPage} /> 
                <PrivateRoute exact path='/comments/:postid' component={CommentPage} />
                <Route exact path='/chat' component={ChatPage} />

                <Route exact path='/profile' render={() => {return <Redirect to={`/profile/${username}`} />}} />
                <Route exact path='/friends' render={() => {return <Redirect to={`/friends/${username}`} />}} />
            </Router>
        )
    }
}

export default Content