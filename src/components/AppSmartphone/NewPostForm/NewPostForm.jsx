import React, {useState} from 'react'

import AddIcon from '@material-ui/icons/Add';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Zoom from '@material-ui/core/Zoom/'
import Fab from '@material-ui/core/Fab'

function NewPostForm() {
    const [textAreaClick, setTextAreaClick] = useState(false)

    return (
        <div className='NewPostForm'>
            <div className='NewPostFormHeader'>
                <div className='ReturnPostButton' onClick={() => {
                    document.querySelector('.NewPostForm').style.display = 'none'
                    setTextAreaClick(false) // PRA QUANDO SAIR DO MENU O TXTAREA FICAR PEQUENO DNV
                }}>
                    <ArrowBackIcon style={{fill: 'white'}} />
                </div>
                <h1>Post area</h1>
            </div>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onClick={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                }} required> 
                </textarea>
                <Zoom in='true'>
                    <Fab className='AddPostButton' onClick={() => { setTextAreaClick(false)}} type='submit'>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm