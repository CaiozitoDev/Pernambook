import React from 'react'

import PostFooter from './PostFooter'

function Post() {
    

    return (
    <div className='Post'>
        <div className='PostHeader'>
            <img src={window.location.origin + '/fds/EWsm1wUU4Agql-Z.jpg'} className='PostUserIcon'/>
            <a href=''> <h5>Caio Felipe</h5> </a>
            <p>@CaioReidaFarofa</p>
        </div>
        <div className='PostBody'>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <PostFooter />
    </div>
    )
}

export default Post