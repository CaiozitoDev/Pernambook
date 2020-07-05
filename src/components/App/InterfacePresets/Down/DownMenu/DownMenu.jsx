import React, {useEffect} from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'

import slideAnimation from '../../../../functions/slideAnimation/slideAnimation'

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

function DownMenu(props) {
    useEffect(() => {return slideAnimation('DownMenu')}, [])
    return (
        <div className='DownMenu' style={{paddingRight: !props.isChat ? '40px' : '0px'}}>
            <div className='DownMenuComponents'>
                <DownMenuSearch />
                {!props.isChat ? <DownMenuFriends /> : <NewChatForm />}
            </div>
        </div>
    )
}

export default DownMenu