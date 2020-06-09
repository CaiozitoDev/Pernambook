import React, { useState, useEffect} from 'react'


import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'

import HomePage from './HomePage/HomePage'
import ProfilePage from './ProfilePage/ProfilePage'
import MessagesPage from './MessagesPage/MessagesPage'
import FriendsPage from './FriendsPage/FriendsPage'

import LoadingPage from '../Loading'

import Login from './login'

import axios from 'axios'

function App() {
    const [isAuth, setIsAuth] = useState(undefined)

    axios.post('/auth', {local_token: localStorage.getItem('local_token')})
        .then(response => {
            console.log(response.data)
            setIsAuth(response.data.authorized)
        })
        .catch((err) => {
            console.log(err)
        })

    if(isAuth == undefined) {
        return <LoadingPage />
    } else {
        return (
            <div className='App'>
                <Router>
                    <Route exact path='/home' component={() => {return isAuth ? <HomePage /> : <div>Connection not authorized</div>}} />
                    <Route exact path='/profile' component={ProfilePage} />
                    <Route exact path='/messages' component={MessagesPage}/>
                    <Route exact path='/friends' component={FriendsPage}/>
                    <Route exact path='/loading' component={LoadingPage}/>
    
                    <Route exact path='/login' component={() => {return <Login title='Log In' />}}/>
                    <Route exact path='/register' component={() => {return <Login title='Register' />}}/>
                </Router>
            </div>
            // TENTAR O ESQUEMA DE CRIAR O JSX "PAGES" E JOGAR AS ROTAS DO APP PRA LA E DEIXAR AQ SÓ AS ROTAS DE LOGIN/REGISTER
            // PRA TENTAR TIRAR A LOADING PAGE QUANDO VAI PROS MESMOS
        )
    }
}


export default App