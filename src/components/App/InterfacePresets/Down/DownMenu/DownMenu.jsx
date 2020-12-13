import React, {useContext} from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'
import NewChatForm from './NewChatForm'

import {Slide} from '@material-ui/core'

import {ChatContext} from '../../../../Contexts'

function DownMenu() {
    const chat = useContext(ChatContext)

    return (
        <Slide direction='up' in={true} timeout={1000} mountOnEnter>
            <div className='DownMenu' style={{paddingRight: !chat.isChat ? '40px' : '0px'}}>
                <div className='DownMenuComponents'>
                    <DownMenuSearch />
                    {!chat.isChat ? <DownMenuFriends /> : <NewChatForm chatid={chat.chatId} chatData={chat.chatData} />}
                </div>
            </div>
        </Slide>
    )
}

export default DownMenu