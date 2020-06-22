import React from 'react'

import slideAnimation from '../../../../../functions/slideAnimation/slideAnimation'

import RightMenuContent from './RightMenuContent/RightMenuContent'

function RightMenu() {
    return (
        <div className='RightMenu' onLoad={() => {slideAnimation('RightMenu')}}>
            <h2>Most <span style={{color: 'red'}}>❤</span> posts</h2>
            <RightMenuContent />
        </div>
    )
}

export default RightMenu