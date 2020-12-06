import React, {useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import SearchTab from './SearchTab/SearchTab'

function DownMenuSearch() {
    const [isInputClicked, setIsInputClicked] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    function handleTxtValue(e) {
        const value = e.target.value

        setTxtValue(value)
    }

    return (
        <div className='DownMenuSearch'>
            <span> <SearchIcon style={{fill: 'white'}}/> </span>
            <input type='text' placeholder='Find a profile' 
                onFocus={() => {setIsInputClicked(true)}}
                onBlur={() => {setIsInputClicked(false); setTxtValue('')}}
                onChange={handleTxtValue}
                value={txtValue}
             />
            <SearchTab isClicked={isInputClicked} txtValue={txtValue} />
        </div>
    )
}

export default DownMenuSearch