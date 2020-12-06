import React, {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content'

import WelcomePage from './WelcomePage/WelcomePage'
import LoginRegisterPage from './LoginRegisterPage/LoginRegisterPage'

import api from '../services/API_CONFIG'

import {AuthContext} from './Contexts'

function App({device}) {
    const [Auth, setAuth] = useState({
        userData: {},
        authStatus: 'processing'
    })

    useEffect(() => {
        api.get('/')
            .then(response => {
                setAuth({
                    userData: response.data.userData,
                    authStatus: 'accepted'
                })
            }).catch(err => {
                console.log(err)

                setAuth(preValue => {
                    return {
                        ...preValue,
                        authStatus: 'denied'
                    }
                })
            })
    }, [])

    return (
        <Router> 
            <Route exact path='/' component={WelcomePage} /> 
            <Route exact path='/login' component={() => {return <LoginRegisterPage title='Log In' />}}/>
            <Route exact path='/register' component={() => {return <LoginRegisterPage title='Register' />}}/>
            <AuthContext.Provider value={Auth}>
                <Content device={device} />
            </AuthContext.Provider>
        </Router>
    )
}


export default App