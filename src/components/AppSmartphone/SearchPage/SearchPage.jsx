import React from 'react'

import {InterfacePresets} from '../InterfacePresets/InterfacePresets'

import TopTrendingPost from './TopTrendingPost/TopTrendingPost'
import Trending from './Trending/Trending'

function Search() {
    return (
        <div className='Search'>
            <InterfacePresets title='Search' />

            <div className='SearchContent'>
                <TopTrendingPost />
                <Trending />
            </div>
        </div>
    )
}

export default Search