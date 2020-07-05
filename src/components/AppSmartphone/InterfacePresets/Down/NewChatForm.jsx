import React from 'react'

import {Send} from '@material-ui/icons'
import {Zoom, Fab} from '@material-ui/core'

function NewChatForm() {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='DownMenu' style={{padding: '5px'}}>
                <div className='NewChatForm'>
                    <textarea placeholder='Send a message'></textarea>
                    <Fab>
                        <Send />
                    </Fab>
                </div>
            </div>
        </Zoom>
    )
}

export default NewChatForm