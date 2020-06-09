import React, {useState, useEffect} from 'react'

import Header from './Header/Header'
import Post from './Post/Post'

import axios from 'axios'

function PostArea() {
    const [bodyText, setBodyText ] = useState([])

    function handleBodyText() {
        axios.get('/teste').then(response => {
            setBodyText(response.data)
        })
    }

    useEffect(handleBodyText)

    return (
        <div className='col-5 PostArea'>
            <Header />
            <h1>Home page</h1>

            {bodyText.map((post) => {
                return <Post postbodytext={post.postbodytext} />
            })}
        </div>
    )
}

export default PostArea