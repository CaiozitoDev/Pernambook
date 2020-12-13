import React, { useEffect, useState, useContext } from 'react'

import {InterfacePresets} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import UserProfile from './UserProfile/UserProfile'

import Post from '../../PostArea/Post/Post'

import Zoom from '@material-ui/core/Zoom'

import api from '../../../services/API_CONFIG'

import { useParams } from 'react-router-dom'

import {AuthContext, PostContext} from '../../Contexts'

import InfiniteScroll from 'react-infinite-scroller'

function ProfilePage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [userData, setUserData] = useState({
        photo: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        userId: '',
        friendslength: '',
        timestamp: ''
    })

    const [userPosts, setUserPosts] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState({
        from: 0,
        to: 10
    })
    
    const [allPostsLength, setAllPostsLength] = useState(0)

    const [hasMore, setHasMore] = useState(true)

    const {userId} = useParams()
    
    useEffect(() => {
        // IMPORTA OS DADOS
        api.get(`/profile/${userId}`)
        .then(response => {
            setUserData({
                photo: response.data.photo,
                username: response.data.username,
                userId: response.data.userId,
                friendsLength: response.data.friendsLength,
                timestamp: response.data.timestamp
            })
        })
        .catch(err => {console.log(err)})
    }, [])

    function fetcher() {
        hasMore &&
        api.get(`/userposts?userid=${userId}&from=${numberOfPosts.from}&to=${numberOfPosts.to}`).then(response => {
            setUserPosts(preValue => {
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

            setAllPostsLength(response.data.allPostsLength)
            
            if(numberOfPosts.from >= response.data.allPostsLength){
                setHasMore(false)
            }
        })
    }

    return (
        <div className='ProfilePage'>
            {props.device == 'desktop' ? <DesktopInterfacePresets /> : <InterfacePresets title='Profile' />}
            
            <Zoom in timeout={1000}>
                <div className='ProfileContent'>
                    <UserProfile data={userData} db_user_id={db_user_id} post={allPostsLength} />
                    <h2>Posts</h2>
                    <div className='ProfilePosts'>
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={fetcher}
                            hasMore
                            initialLoad={false}
                            threshold={10}
                            loader={hasMore && <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/>}
                        >
                            {userPosts.map(post => {
                                return (
                                    <PostContext.Provider value={post}>
                                        <Post />
                                    </PostContext.Provider>
                                )
                            })}
                        </InfiniteScroll>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default ProfilePage