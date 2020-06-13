import React, {useState} from 'react'

import AddIcon from '@material-ui/icons/Add';
import {Zoom, Fab} from '@material-ui/core'

import axios from 'axios'

function NewPostForm(props) {
    const [textAreaClick, setTextAreaClick] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    function handleTxtValue(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    function handlePostData() {
        axios.post('/newpost', {txtarea: txtValue, db_user_id: props.id})
            .then(response => {

            })
            .catch(err => {console.log(err)})
    }

    return (
        // ABAIXO FAZ COM Q QUANDO SAIA DO FOCO, O TXTAREA DPS DE 1SEG VOLTA AO NORMAL E TENHA O TEXTO LIMPADO
        <div className='NewPostForm' onBlur={() => {setTimeout(() => {setTextAreaClick(false); document.forms['newpostform'].reset()}, 1000)}}> 
            <h1>Post area</h1>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onFocus={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                }} name='txtarea' onChange={handleTxtValue} value={txtValue}> 
                </textarea>
                <Zoom in={textAreaClick}>
                    <Fab onClick={() => {setTextAreaClick(false); handlePostData}} type='submit'>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm