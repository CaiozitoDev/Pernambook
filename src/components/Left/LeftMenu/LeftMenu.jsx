import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'

function LeftMenu() {
    return (
        <div className='LeftMenu'>
            <NewPostForm />
            <LeftOptions />
        </div>
    )
}

export default LeftMenu