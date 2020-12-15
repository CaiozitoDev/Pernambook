import React, {useEffect, useState} from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content'

import WelcomePage from './WelcomePage/WelcomePage'

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
            <AuthContext.Provider value={Auth}>
                <Content device={device} />
            </AuthContext.Provider>
        </Router>
    )
}


export default App