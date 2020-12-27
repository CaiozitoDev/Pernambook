import React, { useEffect, useState, useContext } from 'react'

import MobileInterfacePresets from '../../AppSmartphone/InterfacePresets/InterfacePresets'
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
        photo: process.env.PUBLIC_URL + '/loading-png-gif.gif',
        username: '',
        userId: '',
        friendsLength: '0',
        timestamp: 'DD/MM/YYYY'
    })

    const [userPosts, setUserPosts] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState({
        from: 0,
        to: 10
    })
    
    const [allPostsLength, setAllPostsLength] = useState(0)

    const [hasMore, setHasMore] = useState(true)

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    const {userId} = useParams()
    
    useEffect(() => {
        // IMPORTA OS DADOS
        getUserData()
        setUserPosts([])
        setNumberOfPosts({
            from: 0,
            to: 10
        })
        setHasMore(true)
    }, [userId])

    function getUserData() {
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
        .catch(err => {
            console.log(err)

            setUserData(preValue => {
                return {
                    ...preValue, username: 'User not found', photo: process.env.PUBLIC_URL + '/not_allowed_image.png'
                }
            })
        })
    }

    function fetcher() {
        if(hasMore && isRequestFinished) {
            setIsRequestFinished(false)

            api.get(`/userposts?userid=${userId}&from=${numberOfPosts.from}&to=${numberOfPosts.to}`).then(response => {
                setNumberOfPosts(preValue => {
                    return {
                        from: preValue.from + response.data.posts.length,
                        to: (preValue.from + response.data.posts.length) + 10
                    }
                })

                setAllPostsLength(response.data.allPostsLength)
                
                if(numberOfPosts.from >= response.data.allPostsLength){
                    setHasMore(false)
                }

                setUserPosts(preValue => {
                    return [
                        ...preValue,
                        ...response.data.posts
                    ]
                })

                setIsRequestFinished(true)
            })
        }
    }

    return (
        <div className='ProfilePage'>
            {props.device == 'desktop' ? <DesktopInterfacePresets /> : <MobileInterfacePresets title='Profile' />}
            
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
                            loader={hasMore && <img src={process.env.PUBLIC_URL + '/loading-png-gif.gif'} className='LoadingImage'/>}
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