import React, {useEffect} from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'
import NewChatForm from './NewChatForm'

import slideAnimation from '../../../../functions/slideAnimation/slideAnimation'

function DownMenu(props) {
    useEffect(() => {return slideAnimation('DownMenu')}, [])
    return (
        <div className='DownMenu' style={{paddingRight: !props.isChat ? '40px' : '0px'}}>
            <div className='DownMenuComponents'>
                <DownMenuSearch />
                {!props.isChat ? <DownMenuFriends /> : <NewChatForm chatid={props.chatid} chatData={props.chatData} />}
            </div>
        </div>
    )
}

export default DownMenu