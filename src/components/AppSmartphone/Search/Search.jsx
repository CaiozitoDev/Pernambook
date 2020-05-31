import React from 'react'

import Left from '../InterfacePresets/Left/Left'
import NewPostFormAddButton from '../InterfacePresets/NewPostForm/NewPostFormAddButton/NewPostFormAddButton'
import NewPostForm from '../InterfacePresets/NewPostForm/NewPostForm'
import Down from '../InterfacePresets/Down/Down'

import SearchMenu from './SearchMenu/SearchMenu'
import TopTrendingPost from './TopTrendingPost/TopTrendingPost'
import Trending from './Trending/Trending'

function Search() {
    return (
        <div className='Search'>
            <Left />
            <NewPostFormAddButton />
            <NewPostForm />
            <Down />
            
            <SearchMenu />
            <div className='SearchContent'>
                <TopTrendingPost />
                <Trending />
            </div>
        </div>
    )
}

export default Search