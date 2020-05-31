import React from 'react'

import SearchIcon from '@material-ui/icons/Search';

function SearchMenu(){
    return(
        <div className='SearchPageHeader'>
            <img src={window.location.origin + '/fds/95791762_2894799623888750_6357181261760430080_n.jpg'} className='PostUserIcon' onClick={() => {
                document.querySelector('.Left').classList.add('isLeftClicked')
                document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')}}
             />
            <div className='SearchMenu'>
                <span> <SearchIcon style={{fill: 'white'}}/> </span>
                <input type='text' placeholder='Search' />
            </div>
            <h5>Trending</h5>
        </div>
    )
}

export default SearchMenu