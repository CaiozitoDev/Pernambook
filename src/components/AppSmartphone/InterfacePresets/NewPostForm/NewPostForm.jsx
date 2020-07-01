import React, {useState} from 'react'

import {Add, ArrowBack, ApartmentOutlined} from '@material-ui/icons';
import {Zoom, Fab} from '@material-ui/core'

import api from '../../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

function NewPostForm() {
    const {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    const [textAreaClick, setTextAreaClick] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    function handleTxtValue(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    function handlePostData() {
        api.post('/newpost', {txtarea: txtValue, db_user_id: db_user_id})
            .then(response => {
                console.log(response.data)
            })
            .catch(err => {console.log(err)})
    }

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
            <form onSubmit={(e) => {e.preventDefault()}} onBlur={() => {setTimeout(() => {setTextAreaClick(false); setTxtValue('')}, 1000)}}>
                <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onFocus={() => {
                    setTextAreaClick(true)  // QUANDO CLICAR
                }} name='txtarea' onChange={handleTxtValue} value={txtValue}> 
                </textarea>
                <Zoom in={textAreaClick}>
                    <Fab onClick={() => {
                        setTextAreaClick(false)
                        document.querySelector('.NewPostForm').classList.remove('isNewPostFormClicked')
                        return handlePostData()
                    }} type='submit' className='AddPostButton'>
                        <Add />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default NewPostForm