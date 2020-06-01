import React from 'react'

import Left from './Left/Left'
import NewPostFormAddButton from './NewPostForm/NewPostFormAddButton/NewPostFormAddButton'
import NewPostForm from './NewPostForm/NewPostForm'
import Down from './Down/Down'
import SearchMenu from './SearchMenu/SearchMenu'

function InterfacePresets(props) {
    return (
        <div className='InterfacePresets'>
            <Left />
            <NewPostFormAddButton />
            <NewPostForm />
            <Down />
            <SearchMenu title={props.title} />
        </div>
    )
}

function LeftPreset() {
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
function SearchMenuPreset() {
    return <SearchMenu />
}

export {
    InterfacePresets,
    LeftPreset,
    NewPostFormAddButtonPreset,
    NewPostFormPreset,
    DownPreset,
    SearchMenuPreset
}