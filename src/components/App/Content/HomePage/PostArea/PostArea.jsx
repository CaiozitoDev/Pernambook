import React, {useState, useEffect} from 'react'

import Header from './Header/Header'
import Post from './Post/Post'

import api from '../../../../../services/API_CONFIG'

import InfiniteScroll from 'react-infinite-scroller'

function PostArea() {
    const [postArray, setpostArray] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState(3)

    function handleNumberOfPosts() {
        console.log('chegou')
        api.get(`/posts?numberOfPosts=${numberOfPosts}`).then(response => {
            setpostArray(response.data)
            console.log(response.data.length)

            response.data.length == numberOfPosts && setNumberOfPosts(numberOfPosts + 1)
        })
        .catch(err => {console.log(err)})
    }

    useEffect(handleNumberOfPosts, [])

    return (
        <div className='col-5 PostArea'>
            <Header />
            <h1>Home page</h1>

            {/* MAPPING DE TODOS OS POSTS NA POST AREA, O PARAM "POST" É UM OBJETO COM OS DADOS DE CADA POST */}
            <InfiniteScroll
                pageStart={0}
                loadMore={handleNumberOfPosts}
                hasMore={true}
                initialLoad={false}
                loader={<img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/>}
            >
                {postArray.map((post) => {
                    return <Post postdata={post} />
                })}
            </InfiniteScroll>
        </div>
    )
}

export default PostArea