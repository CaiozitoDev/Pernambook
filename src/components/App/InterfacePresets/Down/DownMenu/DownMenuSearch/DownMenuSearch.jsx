import React, {useState} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import SearchTab from '../../../../../SearchTab/SearchTab'

function DownMenuSearch() {
    const [isInputClicked, setIsInputClicked] = useState(false)

    const [input, setInput] = useState('')

    function handleTxtValue(e) {
        const value = e.target.value

        setInput(value)
    }

    return (
        <div className='DownMenuSearch'>
            <span> <SearchIcon style={{fill: 'white'}}/> </span>
            <input 
                type='text' 
                placeholder='Find a profile' 
                onFocus={() => {setIsInputClicked(true)}}
                onBlur={() => {setIsInputClicked(false); setInput('')}}
                onChange={handleTxtValue}
                value={input || ''}
             />
            <SearchTab isClicked={isInputClicked} input={input} device='desktop' />
        </div>
    )
}

export default DownMenuSearch