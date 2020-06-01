import React from 'react'

import {InterfacePresets} from '../InterfacePresets/InterfacePresets'

import Message from './Message/Message'

function Messages() {
    return (
        <div className='Messages'>
            <InterfacePresets title='Messages' />

            <div className='MessagesContent'>
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

export default Messages