import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/messages' component={MessagesPage}/>
                <Route exact path='/friends' component={FriendsPage}/>
            </Router>
        </div>
    )
}


export default App