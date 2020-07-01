import React, {useState, useEffect} from 'react'

import Post from './Post/Post'

import api from '../../../../../services/API_CONFIG'

function PostArea() {
    const [bodyText, setBodyText] = useState([])

    useEffect(() => {
        api.get('/posts').then(response => {
            setBodyText(response.data)
        })
        .catch(err => {console.log(err)})
    })

    return (
        <div className='PostArea'>
            <h1>Home page</h1>

            {/* MAPPING DE TODOS OS POSTS NA POST AREA, O PARAM "POST" É UM OBJETO COM OS DADOS DE CADA POST */}
            {bodyText.map((post) => {
                return <Post postdata={post} />
            })}
        </div>
    )
}

export default PostArea