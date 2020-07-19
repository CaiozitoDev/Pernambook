import React, {useState} from 'react'

import {useParams} from 'react-router-dom'

import api from '../../../../services/API_CONFIG'

import {Zoom, Fab} from '@material-ui/core'
import {Add} from '@material-ui/icons'

function NewCommentForm(props) {
    const {postid} = useParams()
    const db_user_id = props.db_user_id

    const [txtValue, setTxtValue] = useState('')

    const [isDisable, setIsDisable] = useState(false)

    const [errorMessage, setErrorMessage] = useState('')

    function handleTxtArea(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    function handleCommentData() {
        if(txtValue == '') {
            setErrorMessage('Text area is empty')
        } else {
            setIsDisable(true)
            setErrorMessage('Sending...')

            api.patch('/addcomment', {postid, txtValue, db_user_id}).then(response => {
                console.log(response.data)
                setTxtValue('')
                setIsDisable(false)
                setErrorMessage('')
            })
            .catch(err => {console.log(err)})
        }
    }

    return (
        <div className='NewCommentForm'>
            <h6>{errorMessage}</h6>
            <textarea rows={3} placeholder='Write a comment' name='commenttxtarea' onChange={handleTxtArea} value={txtValue}></textarea>
            <Zoom in={true}>
                <Fab onClick={handleCommentData} disabled={isDisable}>
                    <Add />
                </Fab>
            </Zoom>
        </div>
    )
}

export default NewCommentForm