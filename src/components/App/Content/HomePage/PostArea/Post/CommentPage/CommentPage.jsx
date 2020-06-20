import React, { useEffect } from 'react'

import Post from '../Post'

import axios from 'axios'

function CommentPage(props) { 
    useEffect(() => {
        axios.post('/post', props.postid)
            .then(response => {

            })
            .catch(err => {console.log(err)})
    })
    return (
        <div className='CommentPage'>
            <Post postdata={} />
            <div className='CommentArea'>
                <div className='comments'>
                    <div className='comment'>
                        asdfasdf
                    </div>
                </div>
                <div className='NewCommentForm'>
    
                </div>
            </div>
        </div>
    )
}

export default CommentPage