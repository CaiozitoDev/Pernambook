import React from 'react'

import InterfacePresets from '../InterfacePresets/InterfacePresets'

import Message from './Message/Message'

function MessagesPage() {
    return (
        <div className='MessagesPage'>
            <InterfacePresets />

            <div className='MessagesContent'>
                <h1>Messages</h1>
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
        </div>
    )
}

export default MessagesPage