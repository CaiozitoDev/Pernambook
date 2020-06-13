import React from 'react'

import TopPost from './TopPost/TopPost'

import Zoom from '@material-ui/core/Zoom'

function Trending() {
    return (
        <div className='Trending'>
            <h2>Most liked posts</h2>
            <Zoom in={true} timeout={1000}>
                <div className='TopPostArea'>
                    <TopPost />
                    <TopPost />
                    <TopPost />
                    <TopPost />
                </div>
            </Zoom>
        </div>
    )
}

export default Trending