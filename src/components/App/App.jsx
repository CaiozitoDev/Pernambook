import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomePage from './HomePage/HomePage'

function App() {
    return (
        <div className='App'>
            <Router>
                <Route exact path='/' component={HomePage}/>
                {/* <Route exact path='/profile' component={}/>
                <Route exact path='/messages' component={}/>
                <Route exact path='/friends' component={}/> */}
            </Router>
        </div>
    )
}


export default App