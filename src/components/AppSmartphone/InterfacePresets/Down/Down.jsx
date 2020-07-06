import React from 'react'

import DownMenu from './DownMenu/DownMenu'

function Down(props) {
    return (
        <div className='Down'>
            <DownMenu isChat={props.isChat} chatid={props.chatid} chatData={props.chatData}/>
        </div>
    )
}

export default Down