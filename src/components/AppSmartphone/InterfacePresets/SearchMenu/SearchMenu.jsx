import React, {useEffect, useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import {Slide} from '@material-ui/core'

import {handleMyProfileData} from '../../../functions/LoadProfilePhoto/LoadProfilePhoto'

import SearchTab from './SearchTab/SearchTab'

function SearchMenu(props){
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
    })

    useEffect(() => {
        handleMyProfileData().then(data => {
            setUserData({src: data.src})
        })
    }, [])

    const [isInputClicked, setIsInputClicked] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    function handleTxtValue(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    return(
        <Slide direction='down' in={true} timeout={1000} mountOnEnter>
            <div className='SearchPageHeader'>
                <img src={userData.src} className='SearchMenuIcon' onClick={() => {
                    document.querySelector('.Left').classList.add('isLeftClicked')
                    document.querySelector('.LeftMenu').classList.add('isLeftMenuClicked')}}
                alt='img' />
                <div className='SearchMenu'>
                    <span> <SearchIcon style={{fill: 'white'}}/> </span>
                    <input type='text' placeholder='Find a profile' 
                        onFocus={() => {setIsInputClicked(true)}}
                        onBlur={() => {setIsInputClicked(false);setTxtValue('')}}
                        onChange={handleTxtValue}
                        value={txtValue}
                     />
                </div>
                <h5>{props.title}</h5>
                <SearchTab isClicked={isInputClicked} txtValue={txtValue} />
            </div>
        </Slide>
    )
}

export default SearchMenu