import React, {useState, useEffect} from 'react'

import Header from '../App/Content/HomePage/Header/Header'
import Post from './Post/Post'

import api from '../../services/API_CONFIG'

import InfiniteScroll from 'react-infinite-scroller'

import useFetch from '../../services/UseFetch'

function PostArea(props) {
    const [postArray, setpostArray] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState(10)

    const [hasMore, setHasMore] = useState(true)

    const {data} = useFetch(`/posts?numberOfPosts=${numberOfPosts}`)
 
    function handleNumberOfPosts() {
        /* api.get(`/posts?numberOfPosts=${numberOfPosts}`).then(response => {
            setpostArray(response.data.posts)

            numberOfPosts < response.data.postLength ? numberOfPosts && setNumberOfPosts(numberOfPosts + 10) :
                setHasMore(false)
        })
        .catch(err => {console.log(err)}) */

        if(data !== undefined) {
            setpostArray(data.posts)
    
            numberOfPosts < data.postLength ? numberOfPosts && setNumberOfPosts(numberOfPosts + 10) :
            setHasMore(false)
        }
    }

    useEffect(handleNumberOfPosts, [])

    return (
        <div className={`${props.device == 'desktop' && 'col-5'} PostArea`}>
            {props.device == 'desktop' && <Header />}

            <h1>Home page</h1>

            {/* MAPPING DE TODOS OS POSTS NA POST AREA, O PARAM "POST" É UM OBJETO COM OS DADOS DE CADA POST */}
            <InfiniteScroll
                pageStart={0}
                loadMore={handleNumberOfPosts}
                hasMore={true}
                initialLoad={true}
                loader={hasMore ? <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/> : <h4 className='LoadingImage'>End</h4>}
            >
                {postArray.map((post) => {
                    return <Post postdata={post} />
                })}
            </InfiniteScroll>
        </div>
    )
}

export default PostArea