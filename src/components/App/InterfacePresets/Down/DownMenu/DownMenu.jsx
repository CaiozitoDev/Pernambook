import React, {useEffect} from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'
import NewChatForm from './NewChatForm'

import slideAnimation from '../../../../functions/slideAnimation/slideAnimation'

import {Slide} from '@material-ui/core'

function DownMenu(props) {
    /* useEffect(() => {return slideAnimation('DownMenu')}, []) */
    return (
        <Slide direction='up' in={true} timeout={1000} mountOnEnter>
            <div className='DownMenu' style={{paddingRight: !props.isChat ? '40px' : '0px'}}>
                <div className='DownMenuComponents'>
                    <DownMenuSearch />
                    {!props.isChat ? <DownMenuFriends /> : <NewChatForm chatid={props.chatid} chatData={props.chatData} />}
                </div>
            </div>
        </Slide>
    )
}

export default DownMenu