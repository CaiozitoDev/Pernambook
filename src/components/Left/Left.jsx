import React from 'react'

import Brand from './Brand/Brand'
import LeftMenu from './LeftMenu/LeftMenu'

function Left() {
    return (
        <div className='col-4 Left'>
            <Brand />
            <LeftMenu />
        </div>
    )
}

export default Left