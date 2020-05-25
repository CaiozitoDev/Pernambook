import React from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'

function LeftMenu() {
    return (
        <div className='LeftMenu'>
            <NewPostForm />
            <hr />
            <LeftOptions />
            <hr />
        </div>
    )
}

export default LeftMenu