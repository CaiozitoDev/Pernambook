import React, {useState} from 'react'

import AddIcon from '@material-ui/icons/Add';
import {Zoom, Fab} from '@material-ui/core'

import api from '../../../../../../services/API_CONFIG'

function NewPostForm({id}) {
    const [textAreaClick, setTextAreaClick] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    const [title, setTitle] = useState('Post area')

    function handleTxtValue(e) {
        const value = e.target.value

        setTxtValue(value)
    }

    function handlePostData() {
        if(txtValue.length == 0) {
            setTitle('⚠ Min length: 1')
        } else if(txtValue.length > 400) {
            setTitle('⚠ Max length: 400')
        } else {
            setTitle('Sending...')
            api.post('/posts', {content: txtValue, db_user_id: id})
                .then(response => {
                    setTitle('Post area')
                }).catch(err => {console.log(err)})
        }
    }

    return (
        // ABAIXO FAZ COM Q QUANDO SAIA DO FOCO, O TXTAREA DPS DE 1SEG VOLTA AO NORMAL E TENHA O TEXTO LIMPADO
        <div className='NewPostForm' onBlur={() => {setTimeout(() => {
            setTextAreaClick(false); setTxtValue(''); setTitle('Post area')}
        , 1000)
            document.querySelector('.LeftMenu').style.overflowY = 'initial'
        }}> 
            <h1>{title}</h1>
            <form onSubmit={(e) => {e.preventDefault()}}>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onFocus={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                    document.querySelector('.LeftMenu').style.overflowY = 'scroll'
                }} name='txtarea' onChange={handleTxtValue} value={txtValue}> 
                </textarea>
                <Zoom in={textAreaClick}>
                    <Fab onClick={() => {
                        setTextAreaClick(false)
                        return handlePostData()
                    }} type='submit'>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm