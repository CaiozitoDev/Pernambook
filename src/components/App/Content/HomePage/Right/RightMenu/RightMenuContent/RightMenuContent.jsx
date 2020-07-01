import React, { useState, useEffect } from 'react'

import TopOnePost from './TopOnePost/TopOnePost'
import TopPost from './TopPosts/TopPosts'

import api from '../../../../../../../services/API_CONFIG'

function RightMenuContent() {
    const [topPosts, setTopPosts] = useState([])

    useEffect(() => {
        api.get('/topposts').then(response => {
            setTopPosts(response.data)
        })
        .catch(err => {console.log(err)})
    })

    return (
        <div className='TopPostArea'>
            {topPosts.map((post, index) => {
                if(index == 0) {
                    return <TopOnePost postdata={post} />
                } else {
                    return <TopPost postdata={post} />
                }
            })}
        </div>
    )
}

export default RightMenuContent