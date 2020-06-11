import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function Message() {
    return (
        <Zoom in={true} >
            <div className='Message'>
                <img src={window.location.origin + '/fds/EXq0a0EXQAAUmjt.jpg'} alt='img' />
                <div className='MessageText' >
                    <p>" Some quick example text to build on the card title and make up the bulk of the card's content. "</p>                           
                </div>
            </div>
        </Zoom>
    )
}

export default Message