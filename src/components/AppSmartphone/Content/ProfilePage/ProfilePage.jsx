import React, { useEffect, useState } from 'react'

import {InterfacePresets} from '../../InterfacePresets/InterfacePresets'
import UserProfile from './UserProfile/UserProfile'

import Post from '../HomePage/PostArea/Post/Post'

import Zoom from '@material-ui/core/Zoom'

import api from '../../../../services/API_CONFIG'

import { useParams } from 'react-router-dom'

import jwt from 'jsonwebtoken'

import InfiniteScroll from 'react-infinite-scroller'

function Profile() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))
    
    const [isRequestFinished, setIsRequestFinished] = useState(false)

    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        userid: '',
        friendslength: '',
        date: ''
    })

    const [userPosts, setUserPosts] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState(5)

    const {username} = useParams()
    
    useEffect(() => {
        // IMPORTA OS DADOS
        api.get(`/profile/${username}`)
        .then(response => {
            setUserData({
                src: response.data.src,
                username: response.data.username,
                userid: response.data.userid,
                friendslength: response.data.friendslength,
                date: response.data.date
            })

            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})

        handleNumberOfPosts()
    }, [])

    function handleNumberOfPosts() {
        api.get(`/userpost?username=${username}&numberOfPosts=${numberOfPosts}`).then(response => {
            setUserPosts(response.data)

            response.data.length == numberOfPosts && setNumberOfPosts(numberOfPosts + 5)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='Profile'>
            <InterfacePresets title='Profile' />
            {isRequestFinished && 
                <Zoom in={true} timeout={1000}>
                    <div className='ProfileContent'>
                        <UserProfile data={userData} db_user_id={db_user_id} userid={userData.userid} post={userPosts.length} />
                        <h2>{username} - posts</h2>
                        <div className='ProfilePosts'>
                            <InfiniteScroll
                                pageStart={0}
                                loadMore={handleNumberOfPosts}
                                hasMore={true}
                                initialLoad={false}
                                loader={<img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/>}
                            >
                                {userPosts.map(post => {
                                    return <Post postdata={post} />
                                })}
                            </InfiniteScroll>
                        </div>
                    </div>
                </Zoom>
            }
        </div>
    )
}

export default Profile