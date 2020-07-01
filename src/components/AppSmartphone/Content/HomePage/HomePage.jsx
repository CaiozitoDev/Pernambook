import React from 'react'

import Header from './Header/Header'
import LogOffConfirm from './LogOffConfirm/LogOffConfirm'
import PostArea from './PostArea/PostArea'

import {
    LeftPreset as Left,
    NewPostFormPreset as NewPostForm,
    NewPostFormAddButtonPreset as NewPostFormAddButton,
    DownPreset as Down
} from '../../InterfacePresets/InterfacePresets'

function Home() {
    return (
        <div className='Home'>
            <div className='InterfacePresets'>
                <Left />
                <NewPostForm />
                <NewPostFormAddButton />
                <Down />
            </div> 

            <Header />
            <LogOffConfirm />    
            <PostArea />
        </div>
    )
}

export default Home