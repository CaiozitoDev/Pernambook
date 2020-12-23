import React, { useContext, useEffect } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from './App/Content/HomePage/HomePage'
import SmartphoneHomePage from './AppSmartphone/Content/HomePage/HomePage'

import SearchPage from './AppSmartphone/Content/SearchPage/SearchPage'
import ProfilePage from './NavBarPages/ProfilePage/ProfilePage'
import MessagesPage from './NavBarPages/MessagesPage/MessagesPage'
import FriendsPage from './NavBarPages/FriendsPage/FriendsPage'
import CommentPage from './NavBarPages/CommentPage/CommentPage'
import ChatPage from './NavBarPages/ChatPage/ChatPage'

import LoginRegisterPage from './LoginRegisterPage/LoginRegisterPage'

import LoadingPage from './LoadingPage/Loading'

import NotAuthorizedPage from './NotAuthorizedPage/NotAuthorizedPage'

import {AuthContext} from './Contexts'

import WelcomePage from './WelcomePage/WelcomePage'

import socket from '../services/SOCKET_CONFIG'

function Content(props) {
    const {userData, authStatus} = useContext(AuthContext)

    useEffect(() => {
        if(authStatus == 'accepted' && Notification.permission == 'granted') {
            socket.on(`${userData.db_user_id}_browsernotification`, (data) => {
                let n = new Notification(data.username, {
                    icon: process.env.PUBLIC_URL + '/android-chrome-192x192.png',
                    body: data.content
                })

                setTimeout(() => {
                    n.close()
                }, 5000)
            })
        }
    }, [authStatus])

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} render={(props) => {
            switch(authStatus) {
                case 'processing':
                    return <LoadingPage />
                case 'accepted':
                    return <Component {...props} />
                case 'denied':
                    return <NotAuthorizedPage />
            }
        }} />
    )

    return (
        <Router>
            <Route exact path='/' render={() => {
                switch(authStatus) {
                    case 'processing':
                        return <LoadingPage />
                    case 'denied':
                        return <WelcomePage authStatus='denied' />
                    case 'accepted':
                        return <Redirect to='/home' />
                }
            }} /> 

            <PrivateRoute exact path='/home' component={props.device == 'desktop' ? HomePage : SmartphoneHomePage} />
            <PrivateRoute exact path='/search' render={() => {
                    props.device == 'smartphone' ? <SearchPage /> : <Redirect to='/home' />
            }} />
            <PrivateRoute exact path='/profile/:userId' component={() => {return <ProfilePage device={props.device} />}} />
            <PrivateRoute exact path='/messages' component={() => {return <MessagesPage device={props.device} />}} />
            <PrivateRoute exact path='/friends/:userId' component={() => {return <FriendsPage device={props.device} />}} />
            <PrivateRoute exact path='/comments/:postid' component={() => {return <CommentPage device={props.device} />}} />
            <PrivateRoute exact path='/chat/:chatId' component={() => {return <ChatPage device={props.device} />}} />

            <Route exact path='/login' component={() => {return <LoginRegisterPage title='Log In' />}}/>
            <Route exact path='/register' component={() => {return <LoginRegisterPage title='Register' />}}/>

            <Route exact path='/profile' render={() => {return <Redirect to={`/profile/${userData.db_user_id}`} />}} />
            <Route exact path='/friends' render={() => {return <Redirect to={`/friends/${userData.db_user_id}`} />}} />
            <Route exact path='/chat' render={() => {return <Redirect to={`/messages`} />}} />
        </Router>
    )
}

export default Content