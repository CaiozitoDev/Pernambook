import React from 'react'

import Left from './Left/Left'
import Down from './Down/Down'

function InterfacePresets(props) {
    return (
        <div className='InterfacePresets'>
            <Left />
            <Down isChat={props.isChat} />
        </div>
    )
}

export default InterfacePresets 