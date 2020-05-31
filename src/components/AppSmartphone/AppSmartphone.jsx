import React from 'react'

import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Home/Home'
import Search from './Search/Search'

function AppSmartphone() {
    return (
        <div className='AppSmartphone'>
            <Router>
                <Route exact path='/' component={Home} />
                <Route exact path='/search' component={Search} />
            </Router>
        </div>
    )
}

export default AppSmartphone
