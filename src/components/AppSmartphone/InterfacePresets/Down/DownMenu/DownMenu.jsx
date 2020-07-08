import React from 'react'

import NavBar from '../NavBar'
import NewChatForm from '../NewChatForm'

import {Slide} from '@material-ui/core'

function DownMenu(props) {
    return (
        <Slide direction='up' in={true} timeout={1000} mountOnEnter> 
            <div className='DownMenu'>
            {!props.isChat ?
                <NavBar />
                : 
                <NewChatForm chatid={props.chatid} chatData={props.chatData}/>
            }
            </div>
        </Slide>
    )
}

export default DownMenu