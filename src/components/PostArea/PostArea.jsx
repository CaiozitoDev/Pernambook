import React, {useState, useEffect} from 'react'

import Header from '../App/Content/HomePage/Header/Header'
import Post from './Post/Post'

import InfiniteScroll from 'react-infinite-scroller'

import api from '../../services/API_CONFIG'

import {PostContext} from '../Contexts'

import socket from '../../services/SOCKET_CONFIG'

function PostArea(props) {
    const [postArray, setPostArray] = useState([])
    const [numberOfPosts, setNumberOfPosts] = useState({
        from: 0,
        to: 10
    })

    const [hasMore, setHasMore] = useState(true)

    useEffect(() => {
        socket.on('newpost', () => {
            api.get(`/posts?from=${0}&to=${1}`).then(response => {
                setPostArray(preValue => {
                    return [
                        ...response.data.posts,
                        ...preValue
                    ]
                })

                setNumberOfPosts(preValue => {
                    return {
                        from: preValue.from + 1,
                        ...preValue
                    }
                })
            })
        })
    }, [])

    const fetcher = () => {
        hasMore &&
        api.get(`/posts?from=${numberOfPosts.from}&to=${numberOfPosts.to}`).then(response => {
            setPostArray(preValue => {
                return [
                    ...preValue,
                    ...response.data.posts
                ]
            })

            if(response.data.posts.length) {
                setNumberOfPosts(preValue => {
                    return {
                        from: preValue.from + response.data.posts.length,
                        to: (preValue.from + response.data.posts.length) + 10
                    }
                })
            } 
            
            if(numberOfPosts.from >= response.data.allPostsLength){
                setHasMore(false)
            }
        })
    }

    return (
        <div className={`${props.device == 'desktop' && 'col-5'} PostArea`}>
            {props.device == 'desktop' && <Header />}

            <h1>Home page</h1>

            {/* MAPPING DE TODOS OS POSTS NA POST AREA, O PARAM "POST" É UM OBJETO COM OS DADOS DE CADA POST */}
            <InfiniteScroll
                pageStart={0}
                loadMore={fetcher}
                hasMore
                initialLoad
                loader={hasMore && <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/>}
            >
                {postArray.map((post) => {
                    return <PostContext.Provider value={post} key={post._id}><Post /></PostContext.Provider>
                })}
            </InfiniteScroll>
        </div>
    )
}

export default PostArea