import React, { useEffect, useState } from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'
import UserProfile from './UserProfile/UserProfile'

import Post from '../HomePage/PostArea/Post/Post'

import Zoom from '@material-ui/core/Zoom'

import api from '../../../../services/API_CONFIG'

import { useParams } from 'react-router-dom'

import jwt from 'jsonwebtoken'

function ProfilePage() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))
    
    const [isRequestFinished, setIsRequestFinished] = useState(false)

    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        userid: ''
    })

    const [userPosts, setUserPosts] = useState([])

    const {username} = useParams()
    
    useEffect(() => {
        // IMPORTA OS DADOS
        api.get(`/profile/${username}`)
        .then(response => {
            setUserData({
                src: response.data.src,
                username: response.data.username,
                userid: response.data.userid
            })

            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})

        api.get(`/userpost?username=${username}`).then(response => {
            setUserPosts(response.data)
        })
        .catch(err => {console.log(err)})

    }, [])

    return (
        <div className='ProfilePage'>
            <InterfacePresets />
            {isRequestFinished && 
                <Zoom in={true} timeout={1000}>
                    <div className='ProfileContent'>
                        <h1>Profile</h1>
                        <UserProfile data={userData} db_user_id={db_user_id} userid={userData.userid} />
                        <h2>Cleitin Posts</h2>
                        <div className='ProfilePosts'>
                            {userPosts.map(post => {
                                return <Post postdata={post} />
                            })}
                        </div>
                    </div>
                </Zoom>
            }
        </div>
    )
}

export default ProfilePage