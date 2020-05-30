import React, {useState} from 'react'

import {Add, ArrowBack} from '@material-ui/icons';

import {Zoom, Fab} from '@material-ui/core'

function NewPostForm() {
    const [textAreaClick, setTextAreaClick] = useState(false)

    return (
        <div className='NewPostForm'>
            <div className='NewPostFormHeader'>
                <div className='ReturnPostButton' onClick={() => {
                    document.querySelector('.NewPostForm').classList.remove('isNewPostFormClicked')
                    setTextAreaClick(false) // PRA QUANDO SAIR DO MENU O TXTAREA FICAR PEQUENO DNV
                }}>
                    <ArrowBack style={{fill: 'white'}} />
                </div>
                <h1>Post area</h1>
            </div>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onClick={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                }} required> 
                </textarea>
                <Zoom in={textAreaClick}>
                    <Fab className='AddPostButton' onClick={() => { setTextAreaClick(false)}} type='submit'>
                        <Add />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm