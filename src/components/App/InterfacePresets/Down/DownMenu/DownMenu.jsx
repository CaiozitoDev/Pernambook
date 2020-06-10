import React from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'

import slideAnimation from '../../../../functions/slideAnimation/slideAnimation'

function DownMenu() {
    return (
        <div className='DownMenu' onLoad={() => {slideAnimation('DownMenu')}}>
            <div className='DownMenuComponents'>
                <DownMenuSearch />
                <DownMenuFriends />
            </div>
        </div>
    )
}

export default DownMenu