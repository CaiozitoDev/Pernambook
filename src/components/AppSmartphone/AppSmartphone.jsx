import React from 'react'

import Left from './Left/Left'
import NewPostForm from './NewPostForm/NewPostForm'
import NewPostFormAddButton from './NewPostForm/NewPostFormAddButton/NewPostFormAddButton'
import Header from './Header/Header'
import PostArea from './PostArea/PostArea'
import Down from './Down/Down'

function AppSmartphone() {
    return (
        <div className='AppSmartphone'>
            <Left />
            <NewPostForm />
            <Header />
            <PostArea />
            <NewPostFormAddButton />
            <Down />
        </div>
    )
}

export default AppSmartphone
