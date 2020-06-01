import React from 'react'

function PostHeader() {
    return (
        <div className='PostHeader'>
            <img src={window.location.origin + '/fds/EWsm1wUU4Agql-Z.jpg'} className='PostUserIcon'/>
            <a href=''> <h5>Caio Felipe</h5>
                <p>@CaioReidaFarofa</p>
            </a>
        </div>
    )
}

export default PostHeader