import React from 'react'

import Left from '../InterfacePresets/Left/Left'
import NewPostForm from '../InterfacePresets/NewPostForm/NewPostForm'
import NewPostFormAddButton from '../InterfacePresets/NewPostForm/NewPostFormAddButton/NewPostFormAddButton'
import Header from './Header/Header'
import LogOffConfirm from './LogOffConfirm/LogOffConfirm'
import PostArea from './PostArea/PostArea'
import Down from '../InterfacePresets/Down/Down'

function Home() {
    return (
        <div className='Home'>
            <Left />
            <NewPostForm />
            <Header />
            <LogOffConfirm />
                
            <PostArea />
            <NewPostFormAddButton />
            <Down /> 
        </div>
    )
}

export default Home