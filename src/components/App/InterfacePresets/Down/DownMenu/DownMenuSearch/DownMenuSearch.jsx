import React, {useState, useEffect} from 'react'

import SearchIcon from '@material-ui/icons/Search';

import SearchTab from './SearchTab/SearchTab'

import api from '../../../../../../services/API_CONFIG'

function DownMenuSearch() {
    const [isInputClicked, setIsInputClicked] = useState(false)

    const [txtValue, setTxtValue] = useState('')

    const [foundUser, setFoundUser] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    function handleTxtValue(e) {
        const {name, value} = e.target

        setTxtValue(value)
    }

    useEffect(() => {
        if(isInputClicked) {
            if(isRequestFinished) {
                setIsRequestFinished(false)

                api.get(`/userfilter?username=${txtValue}`).then(response => {
                    setFoundUser(response.data)
                    setIsRequestFinished(true)
                })
                .catch(err => {console.log(err)})
            }
        }
    })

    return (
        <div className='DownMenuSearch'>
            <span> <SearchIcon style={{fill: 'white'}}/> </span>
            <input type='text' placeholder='Find a profile' 
                onFocus={() => {setIsInputClicked(true)}}
                onBlur={() => {setIsInputClicked(false); setTxtValue('')}}
                onChange={handleTxtValue}
                value={txtValue}
             />
            <SearchTab isClicked={isInputClicked} foundUser={foundUser} />
        </div>
    )
}

export default DownMenuSearch