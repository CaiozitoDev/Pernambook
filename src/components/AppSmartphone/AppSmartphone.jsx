import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import NewPostFormAddButton from './NewPostForm/NewPostFormAddButton/NewPostFormAddButton'
import PostArea from './PostArea/PostArea'
import Down from './Down/Down'

function AppSmartphone() {
    return (
        <div className='AppSmartphone'>
            <NewPostForm />
            <PostArea />
            <NewPostFormAddButton />
            <Down />
        </div>
    )
}

export default AppSmartphone
