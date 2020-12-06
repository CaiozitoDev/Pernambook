import React, {useState} from 'react'

import {Send} from '@material-ui/icons'
import {Zoom, Fab} from '@material-ui/core'

import api from '../../../../services/API_CONFIG'

function NewChatForm({chatData, chatId}) {
    const [txtValue, setTxtValue] = useState('')

    const [isDisabled, setIsDisabled] = useState(false)

    function handleTxtValue(e) {
        const value = e.target.value

        setTxtValue(value)
    }

    function postMessage() {
        setIsDisabled(true)

        if(txtValue.length == 0) {
            document.querySelector('.Chattxtarea').setAttribute('placeholder', 'Empty area, please reinsert')
            setIsDisabled(false)
        } else if(txtValue.length > 400) {
            document.querySelector('.Chattxtarea').setAttribute('placeholder', 'Max length: 400 characters')
            setIsDisabled(false)
        } else {
            api.post('/newmessage', {
                    chatid: chatId, 
                    db_user_id: chatData.myProfile.userid,
                    username: chatData.myProfile.username,
                    content: txtValue
                })
                .then(response => {
                    console.log(response.data)
                    setIsDisabled(false)
                    setTxtValue('')
                })
                .catch(err => {console.log(err)})
        }
    }

    function onEnterPress(e) {
        if(e.keyCode == 13 && e.shiftKey == false) {
            postMessage()
        }
    }

    return (
        <Zoom in timeout={1000}>
            <div className='NewChatForm'>
                <textarea placeholder='Send a message' onChange={handleTxtValue} value={txtValue} className='Chattxtarea' onKeyDown={onEnterPress}></textarea>
                <Fab onClick={postMessage} disabled={isDisabled}>
                    <Send />
                </Fab>
            </div>
        </Zoom>
    )
}

export default NewChatForm