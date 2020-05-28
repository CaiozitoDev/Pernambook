import React from 'react'

import PostAddIcon from '@material-ui/icons/PostAdd';

function NewPostFormAddButton() {
    return (
        <div className='NewPostFormAddButton' onClick={() => {document.querySelector('.NewPostForm').style.display = 'initial'}}>
            <PostAddIcon style={{fill: 'white'}} />
        </div>
    )
}

export default NewPostFormAddButton