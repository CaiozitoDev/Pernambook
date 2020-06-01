import React from 'react'

import PostAddIcon from '@material-ui/icons/PostAdd';

import Zoom from '@material-ui/core/Zoom'

function NewPostFormAddButton() {
    return (
        <Zoom in='true'>
            <div className='NewPostFormAddButton' onClick={() => {document.querySelector('.NewPostForm').classList.add('isNewPostFormClicked')}}>
                <PostAddIcon style={{fill: 'white'}} />
            </div>
        </Zoom>
    )
}

export default NewPostFormAddButton