import React, { useEffect, useState } from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import Post from '../HomePage/PostArea/Post/Post'
import Comment from './Comment/Comment'
import NewCommentForm from './NewCommentForm/NewCommentForm'

import {Zoom} from '@material-ui/core'

import jwt from 'jsonwebtoken'

import {useParams} from 'react-router-dom'

import axios from 'axios'

function CommentPage() { 
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [postData, setPostData] = useState(undefined)

    const {postid} = useParams()

    useEffect(() => {
        axios.get(`/getpost/${postid}`).then(response => {
            setPostData(response.data)
        })
        .catch(err => {return console.log(err)})
    })

    return (
        <div className='CommentPage'>
            <InterfacePresets />
    
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