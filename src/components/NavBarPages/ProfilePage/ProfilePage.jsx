import React, { useEffect, useState, useContext } from 'react'

import {InterfacePresets} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import UserProfile from './UserProfile/UserProfile'

import Post from '../../PostArea/Post/Post'

import Zoom from '@material-ui/core/Zoom'

import api from '../../../services/API_CONFIG'

import { useParams } from 'react-router-dom'

import {AuthContext} from '../../Contexts'

import InfiniteScroll from 'react-infinite-scroller'

function ProfilePage(props) {
    const {userData: {db_user_id}} = useContext(AuthContext)
    
    const [isRequestFinished, setIsRequestFinished] = useState(false)

    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        userid: '',
        friendslength: '',
        date: ''
    })

    const [userPosts, setUserPosts] = useState([])

    const [numberOfPosts, setNumberOfPosts] = useState(10)

    const [hasMore, setHasMore] = useState(true)

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
            setUserPosts(response.data.posts)

            numberOfPosts < response.data.postLength ? numberOfPosts && setNumberOfPosts(numberOfPosts + 10) :
                setHasMore(false)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='ProfilePage'>
            {props.device == 'desktop' ? <DesktopInterfacePresets /> : <InterfacePresets title='Profile' />}
            
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
                                initialLoad={true}
                                loader={hasMore ? <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/> : <h4 className='LoadingImage'>End</h4>}
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

export default ProfilePage