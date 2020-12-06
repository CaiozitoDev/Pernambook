import React, { useContext } from 'react'

import NavBar from '../NavBar'
import NewChatForm from '../NewChatForm'

import {Slide} from '@material-ui/core'

import {ChatContext} from '../../../../Contexts'

function DownMenu() {
    const {isChat, chatId, chatData} = useContext(ChatContext)

    return (
        <Slide direction='up' in timeout={1000} mountOnEnter> 
            <div className='DownMenu'>
            {!isChat ?
                <NavBar />
                : 
                <NewChatForm chatid={chatId} chatData={chatData}/>
            }
            </div>
        </Slide>
    )
}

export default DownMenu