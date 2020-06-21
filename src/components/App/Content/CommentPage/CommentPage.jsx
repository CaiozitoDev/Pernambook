import React, { useEffect, useState } from 'react'

import InterfacePresets from '../../InterfacePresets/InterfacePresets'

import Post from '../HomePage/PostArea/Post/Post'
import Comment from './Comment/Comment'

import {Zoom, Fab} from '@material-ui/core'
import {Add} from '@material-ui/icons'

import axios from 'axios'

import jwt from 'jsonwebtoken'

import {useParams} from 'react-router-dom'

function CommentPage() { 
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [postData, setPostData] = useState(undefined)

    const [txtValue, setTxtValue] = useState('')

    const [isDisable, setIsDisable] = useState(false)

    const {postid} = useParams()

    useEffect(() => {
        axios.post('/getpost', {postid}).then(response => {
            setPostData(response.data)
        })
        .catch(err => {return console.log(err)})
    })

    function handleTxtArea(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    function handleCommentData() {
        setIsDisable(true)
        axios.post('/addcomment', {postid, txtValue, db_user_id}).then(response => {
            console.log(response.data)
            setIsDisable(false)
        })
        .catch(err => {return console.log(err)})
    }

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

                        <div className='NewCommentForm'>
                            <textarea rows={3} placeholder='Write a comment' name='commenttxtarea' onChange={handleTxtArea} value={txtValue} ></textarea>
                            <Zoom in={true}>
                                <Fab onClick={handleCommentData} disabled={isDisable}>
                                    <Add />
                                </Fab>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default CommentPage