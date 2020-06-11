import React from 'react'

import Brand from  '../App/InterfacePresets/Left/Brand/Brand'

function Loading() {
    return (
        <div className='LoadingPage'>
            <div className='LoadingContent'>
                <Brand />
                <h1>LOADING...</h1>
                <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' alt='img' />
            </div>
        </div>
    )
}

export default Loading