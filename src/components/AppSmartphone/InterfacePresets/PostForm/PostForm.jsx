import React, {useState} from 'react'

import NewPostFormAddButton from './NewPostFormAddButton/NewPostFormAddButton'
import NewPostForm from './NewPostForm/NewPostForm'

function PostForm() {
    const [isNewPostButtonClicked, setIsNewPostButtonClicked] = useState(false)

    return (
        <>
            <NewPostForm isNewPostButtonClicked={isNewPostButtonClicked} setIsNewPostButtonClicked={setIsNewPostButtonClicked} />
            <NewPostFormAddButton setIsNewPostButtonClicked={setIsNewPostButtonClicked}  />
        </>
    )
}

export default PostForm