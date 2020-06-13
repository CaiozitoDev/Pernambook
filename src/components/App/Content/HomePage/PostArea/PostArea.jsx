import React, {useState, useEffect} from 'react'

import Header from './Header/Header'
import Post from './Post/Post'

import axios from 'axios'

function PostArea() {
    const [bodyText, setBodyText ] = useState([])

    useEffect(() => {
        axios.get('/posts').then(response => {
            setBodyText(response.data)
        })
        .catch(err => {console.log(err)})
    })

    return (
        <div className='col-5 PostArea'>
            <Header />
            <h1>Home page</h1>

            {/* MAPPING DE TODOS OS POSTS NA POST AREA, O PARAM "POST" É UM OBJETO COM OS DADOS DE CADA POST */}
            {bodyText.map((post) => {
                return <Post postdata={post} />
            })}
        </div>
    )
}

export default PostArea