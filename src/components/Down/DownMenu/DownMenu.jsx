import React from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'

import slideAnimation from '../../functions/slideAnimation'

function DownMenu() {
    return (
        <div className='DownMenu' onClick={() => {slideAnimation('DownMenu')}}>
            <div className='DownMenuComponents'>
                <DownMenuSearch />
                <DownMenuFriends />
            </div>
        </div>
    )
}

export default DownMenu