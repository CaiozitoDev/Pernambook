import React, {useState} from 'react'

import AddIcon from '@material-ui/icons/Add';
import {Zoom, Fab} from '@material-ui/core'

function NewPostForm() {
    const [textAreaClick, setTextAreaClick] = useState(false)

    return (
        // ABAIXO FAZ COM Q QUANDO SAIA DO FOCO, O TXTAREA DPS DE 1SEG VOLTA AO NORMAL
        <div className='NewPostForm' onBlur={() => {setTimeout(() => {setTextAreaClick(false)},1000)}}> 
            <h1>Post area</h1>
            <form>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onFocus={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                }} required> 
                </textarea>
                <Zoom in={textAreaClick}>
                    <Fab onClick={() => {setTextAreaClick(false)}}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm