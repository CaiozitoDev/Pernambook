import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

function DownMenuSearch() {
    return (
        <div className='DownMenuSearch'>
            <span> <SearchIcon style={{fill: 'white'}}/> </span>
            <input type='text' placeholder='Search' />
        </div>
    )
}

export default DownMenuSearch