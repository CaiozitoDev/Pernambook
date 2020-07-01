import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content/Content'

import WelcomePage from '../WelcomePage/WelcomePage'
import LoginRegisterPage from '../LoginRegisterPage/LoginRegisterPage'

import AppSmartphoneStyle from '../../styles/mobile-style'

function AppSmartphone() {
    return (
        <AppSmartphoneStyle className='AppSmartphone'>
            <Router>
                <Route exact path='/' component={WelcomePage} />
                <Route exact path='/login' component={() => {return <LoginRegisterPage title='Log In' />}} />
                <Route exact path='/register' component={() => {return <LoginRegisterPage title='Register' />}} />
            </Router>

            {window.location.pathname !== '/login' && window.location.pathname !== '/register' && window.location.pathname !== '/' &&
                <Content />
            }
        </AppSmartphoneStyle>
    )
}

export default AppSmartphone
