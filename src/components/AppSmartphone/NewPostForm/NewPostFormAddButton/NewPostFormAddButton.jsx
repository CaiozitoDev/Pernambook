import React from 'react'
import {CSSTransition} from 'react-transition-group'

import PostAddIcon from '@material-ui/icons/PostAdd';

import Zoom from '@material-ui/core/Zoom'

function NewPostFormAddButton() {
    return (
        <CSSTransition in={true} appear={true} timeout={300}>
            <div className='NewPostFormAddButton' onClick={() => {document.querySelector('.NewPostForm').classList.add('isNewPostFormClicked')}}>
                <PostAddIcon style={{fill: 'white'}} />
            </div>
        </CSSTransition>
    )
}

export default NewPostFormAddButton