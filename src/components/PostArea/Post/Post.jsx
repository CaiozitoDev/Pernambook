import React from 'react'

// ICONS DO POST FOOTER
import {ThumbUp, Favorite, Comment, FavoriteBorder} from '@material-ui/icons'

function Post() {
    return (
    <div className='Post'>
        <div className='PostHeader'>
            <img src={window.location.origin + '/fds/EWsm1wUU4Agql-Z.jpg'} className='PostHeaderImg'/>
            <a href=''> <h5>Caio Felipe</h5> </a>
            <p>@CaioReidaFarofa</p>
        </div>
        <div className='PostBody'>
            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='PostFooter'>
            <form onSubmit=''>
                <ThumbUp/>
                <FavoriteBorder color='secondary'/>
                <Comment />
            </form>
        </div>
    </div>
    )
}

export default Post