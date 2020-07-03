import React, { useState, useEffect } from 'react'

import TopOnePost from './TopOnePost/TopOnePost'
import TopPost from './TopPosts/TopPosts'

import api from '../../../../../../../services/API_CONFIG'

import {ExpandMore} from '@material-ui/icons'

function RightMenuContent() {
    const [topPosts, setTopPosts] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    useEffect(() => {
        if(isRequestFinished) {
            setIsRequestFinished(false)
            
            api.get('/topposts').then(response => {
                setTopPosts(response.data)
                setIsRequestFinished(true)
            })
            .catch(err => {console.log(err)})

            document.querySelector('.TopPostArea').addEventListener('scroll', function(event) {
                let element = event.target;
                if (element.scrollHeight - element.scrollTop === element.clientHeight) {
                    document.querySelector('.Expand').style.visibility = 'hidden'
                } else {
                    document.querySelector('.Expand').style.visibility = 'initial'
                }
            });
        }
    })

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