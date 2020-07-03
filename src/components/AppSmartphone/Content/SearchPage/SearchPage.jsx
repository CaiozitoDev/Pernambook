import React, {useState, useEffect} from 'react'

import {InterfacePresets} from '../../InterfacePresets/InterfacePresets'

import TopTrendingPost from './TopTrendingPost/TopTrendingPost'
import TopPost from './TopPost/TopPost'

import Zoom from '@material-ui/core/Zoom'

import api from '../../../../services/API_CONFIG'

function Search() {
    const [topPosts, setTopPosts] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    if(isRequestFinished) {
        setIsRequestFinished(false)
        
        api.get('/topposts').then(response => {
            setTopPosts(response.data)
            setIsRequestFinished(true)
        })
        .catch(err => {console.log(err)})
    }

    return (
        <div className='Search'>
            <InterfacePresets title='Search' />

            <div className='SearchContent'>
                {topPosts.length !== 0 && 
                    <TopTrendingPost postdata={topPosts[0]} />
                }
                <Zoom in={true} timeout={1000}>
                    <div className='Trending'>
                        <h2>Most <span style={{color: 'red'}}>❤</span> posts</h2>
                        <Zoom in={true} timeout={1000}>
                            <div className='TopPostArea'>
                                {topPosts.map((post, index) => {
                                    if(index !== 0) {
                                        return <TopPost postdata={post} />
                                    }
                                })}
                            </div>
                        </Zoom>
                    </div>
                </Zoom>
            </div>
        </div>
    )
}

export default Search