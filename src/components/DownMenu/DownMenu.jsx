import React from 'react'

import DownMenuSearch from './DownMenuSearch/DownMenuSearch'
import DownMenuFriends from './DownMenuFriends/DownMenuFriends'

function DownMenu() {
    return (
        <div className='DownMenu'>
            <div className='DownMenuComponents'>
                <DownMenuSearch />
                <DownMenuFriends />
            </div>
        </div>
    )
}

export default DownMenu