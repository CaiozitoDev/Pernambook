import React, {useState } from 'react'

import Left from './Left/Left'
import PostForm from './PostForm/PostForm'
import Down from './Down/Down'
import SearchMenu from './SearchMenu/SearchMenu'
import HomeHeader from './Header/Header'

import {SlideLeftMenuContext} from '../../Contexts'

function InterfacePresets({title, left=true, postForm=true, down=true, searchMenu=true, isHomePage=false}) {
    const [slideLeftMenu, setSlideLeftMenu] = useState(false)

    return (
        <div className='InterfacePresets'>
            <SlideLeftMenuContext.Provider value={{
                slideLeftMenu,
                setSlideLeftMenu
            }}>
                {left && <Left />}
                {searchMenu && <SearchMenu title={title} />}
                {isHomePage && <HomeHeader />}
            </SlideLeftMenuContext.Provider>
            {postForm && <PostForm />}
            {down && <Down />}
        </div>
    )
}

/* function LeftPreset() {
    return <Left />
}
function NewPostFormAddButtonPreset() {
    return <NewPostFormAddButton />
}
function NewPostFormPreset() {
    return <NewPostForm />
}
function DownPreset() {
    return <Down />
}
function SearchMenuPreset(props) {
    return <SearchMenu title={props.title} />
} */

export default InterfacePresets


    /* LeftPreset,
    NewPostFormAddButtonPreset,
    NewPostFormPreset,
    DownPreset,
    SearchMenuPreset */
