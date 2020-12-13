import React, { useState, useEffect } from 'react'

import TopOnePost from './TopOnePost/TopOnePost'
import TopPost from './TopPosts/TopPosts'

import api from '../../../../../../../services/API_CONFIG'

import {ExpandMore} from '@material-ui/icons'

import socket from '../../../../../../../services/SOCKET_CONFIG'

function RightMenuContent() {
    const [topPosts, setTopPosts] = useState([])

    useEffect(() => {
        getTopPosts()

        socket.on('topposts', () => {
            getTopPosts()
        })

        document.querySelector('.TopPostArea').addEventListener('scroll', function(event) {
            let element = event.target;
            if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                document.querySelector('.Expand').style.visibility = 'hidden'
            } else {
                document.querySelector('.Expand').style.visibility = 'initial'
            }
        });
    }, [])

    function getTopPosts() {
        api.get('/topposts').then(response => {
            setTopPosts(response.data.posts)
        }).catch(err => {console.log(err)})
    }

    return (
        <div className='TopPostArea'>
            {topPosts.map((post, index) => {
                if(index == 0) {
                    return <TopOnePost postdata={post} />
                } else {
                    return <TopPost postdata={post} />
                }
            })}
            <div className='Expand'>
                <ExpandMore />
            </div>
        </div>
    )
}

export default RightMenuContent