import React, { useEffect, useState, useContext} from 'react'

import {SearchMenuPreset, LeftPreset, DownPreset} from '../../AppSmartphone/InterfacePresets/InterfacePresets'
import DesktopInterfacePresets from '../../App/InterfacePresets/InterfacePresets'

import Post from '../../PostArea/Post/Post'
import Comment from './Comment/Comment'
import NewCommentForm from './NewCommentForm/NewCommentForm'

import {Zoom} from '@material-ui/core'

import {useParams} from 'react-router-dom'

import api from '../../../services/API_CONFIG'

import {AuthContext} from '../../Contexts'

function CommentPage(props) { 
    const {userData: {db_user_id}} = useContext(AuthContext)

    const [postData, setPostData] = useState(undefined)

    const {postid} = useParams()

    useEffect(() => {
        api.get(`/getpost/${postid}`).then(response => {
            setPostData(response.data)
        })
        .catch(err => {return console.log(err)})
    })

    return (
        <div className='CommentPage'>
        {props.device == 'desktop' ? <DesktopInterfacePresets /> : 
            <div>
                <SearchMenuPreset title='Comments' />
                <LeftPreset />
                <DownPreset />
            </div>
        }
    
            <Zoom in={true} timeout={1000}>
                <div className='CommentArea'>
                    <div className='CommentContent'>
                        {postData !== undefined ? <Post postdata={postData} /> : <h1>Loading...</h1> }

                        <div className='Comments'>
                            {postData !== undefined &&
                                postData.comment.map(commentdata => {
                                    return <Comment data={commentdata} />
                                })
                            }
                        </div>

                        <NewCommentForm db_user_id={db_user_id} />
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default CommentPage