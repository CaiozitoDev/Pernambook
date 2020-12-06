import React, { useContext } from 'react'

import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from './App/Content/HomePage/HomePage'
import SmartphoneHomePage from './AppSmartphone/Content/HomePage/HomePage'

import SearchPage from './AppSmartphone/Content/SearchPage/SearchPage'
import ProfilePage from './NavBarPages/ProfilePage/ProfilePage'
import MessagesPage from './NavBarPages/MessagesPage/MessagesPage'
import FriendsPage from './NavBarPages/FriendsPage/FriendsPage'
import CommentPage from './NavBarPages/CommentPage/CommentPage'
import ChatPage from './NavBarPages/ChatPage/ChatPage'

import LoadingPage from './LoadingPage/Loading'

import NotAuthorizedPage from './NotAuthorizedPage/NotAuthorizedPage'

import {AuthContext} from './Contexts'

function Content(props) {
    const {userData, authStatus} = useContext(AuthContext)

    const PrivateRoute = ({component: Component, ...rest}) => (
        <Route {...rest} component={(props) => {return authStatus == 'accepted' ? (<Component {...props} />) : (<NotAuthorizedPage />)}} />
    )

    if(authStatus == 'processing') {
        return <LoadingPage />
    } else {
        return (
            <Router>
                <PrivateRoute exact path='/home' component={props.device == 'desktop' ? HomePage : SmartphoneHomePage} />
                {props.device == 'smartphone' && <PrivateRoute exact path='/search' component={SearchPage} /> }
                <PrivateRoute exact path='/profile/:username' component={() => {return <ProfilePage device={props.device} />}} />
                <PrivateRoute exact path='/messages' component={() => {return <MessagesPage device={props.device} />}} />
                <PrivateRoute exact path='/friends/:username' component={() => {return <FriendsPage device={props.device} />}} />
                <PrivateRoute exact path='/comments/:postid' component={() => {return <CommentPage device={props.device} />}} />
                <PrivateRoute exact path='/chat/:chatid' component={() => {return <ChatPage device={props.device} />}} />

                <Route exact path='/profile' render={() => {return <Redirect to={`/profile/${userData.db_user_id}`} />}} />
                <Route exact path='/friends' render={() => {return <Redirect to={`/friends/${userData.db_user_id}`} />}} />
                <Route exact path='/chat' render={() => {return <Redirect to={`/messages`} />}} />
            </Router>
        )
    }
}

export default Content