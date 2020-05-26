import React from 'react'

import Left from './Left/Left'
import PostArea from './PostArea/PostArea'
import Right from './Right/Right'
import DownMenu from './DownMenu/DownMenu'

function App() {
    return (
        <div className='App'>
            <Left />
            <PostArea />
            <Right />
            <DownMenu />
        </div>
    )
}


export default App