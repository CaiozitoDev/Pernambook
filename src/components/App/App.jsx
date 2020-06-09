import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Content from './Content/Content'

import LoginRegister from './LoginRegister'

function App() {
    return (
        <div className='App'>
            <Router>    
                <Route exact path='/login' component={() => {return <LoginRegister title='Log In' />}}/>
                <Route exact path='/register' component={() => {return <LoginRegister title='Register' />}}/>
            </Router>
            
            {window.location.pathname !== '/login' && window.location.pathname !== '/register' && <Content />}
        </div>
    )
}


export default App