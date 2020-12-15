import React, {useContext, useState} from 'react'

import {Add, ArrowBack} from '@material-ui/icons';
import {Zoom, Fab, Fade} from '@material-ui/core'

import api from '../../../../../services/API_CONFIG'

import {AuthContext} from '../../../../Contexts'

function NewPostForm({isNewPostButtonClicked, setIsNewPostButtonClicked}) {
    const {userData: {db_user_id}} = useContext(AuthContext)

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
            api.post('/posts', {content: txtValue, db_user_id})
                .then(() => {
                    window.scrollTo({ top: 0, behavior: `smooth` })
                })
                .catch(err => {console.log(err)})
        }
    }

    return (
        <Fade in={isNewPostButtonClicked} mountOnEnter unmountOnExit timeout={500}>
            <div className='NewPostForm'>
                <div className='NewPostFormHeader'>
                    <div className='ReturnPostButton' onClick={() => {
                        //document.querySelector('.NewPostForm').classList.remove('isNewPostFormClicked')
                        setIsNewPostButtonClicked(false)
                        setTextAreaClick(false) // PRA QUANDO SAIR DO MENU O TXTAREA FICAR PEQUENO DNV
                    }}>
                        <ArrowBack style={{fill: 'white'}} />
                    </div>
                    <h1>{title}</h1>
                </div>
                <form onSubmit={(e) => {e.preventDefault()}} onBlur={() => {setTimeout(() => {
                    setTextAreaClick(false)
                    setTxtValue('')
                    setTitle('Post area')
                }, 1000)}}>
                    <textarea placeholder="What's going on?" cols='50' rows={textAreaClick ? '6' : '2'} onFocus={() => {
                        setTextAreaClick(true)  // QUANDO CLICAR
                    }} name='txtarea' onChange={handleTxtValue} value={txtValue}> 
                    </textarea>
                    <Zoom in={textAreaClick}>
                        <Fab onClick={() => {
                            setTextAreaClick(false)
                            //document.querySelector('.NewPostForm').classList.remove('isNewPostFormClicked')
                            setIsNewPostButtonClicked(false)
                            return handlePostData()
                        }} type='submit' className='AddPostButton'>
                            <Add />
                        </Fab>
                    </Zoom>
                </form>
            </div>
        </Fade>
    )
}

export default NewPostForm