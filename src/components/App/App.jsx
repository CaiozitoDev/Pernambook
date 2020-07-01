import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content/Content'

import WelcomePage from '../WelcomePage/WelcomePage'
import LoginRegisterPage from '../LoginRegisterPage/LoginRegisterPage'

import AppStyle from '../../styles/desktop-style'

function App() {
    return (
        <AppStyle className='App'>
            <Router> 
                <Route exact path='/' component={WelcomePage} /> 
                <Route exact path='/login' component={() => {return <LoginRegisterPage title='Log In' />}}/>
                <Route exact path='/register' component={() => {return <LoginRegisterPage title='Register' />}}/>
            </Router>

            {window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/' &&
                <Content />
            }
        </AppStyle>
    )
}


export default App