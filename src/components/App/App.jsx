import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'

import Login from './login'

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/profile' component={ProfilePage} />
                <Route exact path='/messages' component={MessagesPage}/>
                <Route exact path='/friends' component={FriendsPage}/>

                <Route exact path='/login' component={() => {return <Login title='Log In' />}}/>
                <Route exact path='/register' component={() => {return <Login title='Register' />}}/>
            </Router>
        </div>
    )
}


export default App