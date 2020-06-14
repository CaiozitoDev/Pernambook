import React, {useEffect, useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import Zoom from '@material-ui/core/Zoom'

import {handleMyProfileData} from '../../../functions/LoadProfilePhoto/LoadProfilePhoto'

function SearchMenu(props){
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setUserData(preValue => {
                return {...preValue, src: data.src}
            })
        })
    })

    return(
        <Zoom in='true'>
            <div className='SearchPageHeader'>
                <img src={userData.src} className='PostUserIcon' onClick={() => {
                    document.querySelector('.Left').classList.add('isLeftClicked')
                    document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')}}
                alt='img' />
                <div className='SearchMenu'>
                    <span> <SearchIcon style={{fill: 'white'}}/> </span>
                    <input type='text' placeholder='Search' />
                </div>
                <h5>{props.title}</h5>
            </div>
        </Zoom>
    )
}

export default SearchMenu