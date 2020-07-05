import React from 'react'

import {Fab} from '@material-ui/core'
import {Send} from '@material-ui/icons'

function NewChatForm() {
    return (
        <div className='NewChatForm'>
            <textarea placeholder='Send a message'></textarea>
            <Fab>
                <Send />
            </Fab>
        </div>
    )
}

export default NewChatForm