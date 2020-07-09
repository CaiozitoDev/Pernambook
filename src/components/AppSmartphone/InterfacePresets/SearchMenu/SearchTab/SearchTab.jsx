import React, {useState} from 'react'

import {Zoom} from '@material-ui/core'

import api from '../../../../../services/API_CONFIG'

import InfiniteScroll from 'react-infinite-scroller'

function SearchTab(props) {
    const [foundUser, setFoundUser] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    const [numberOfUsers, setNumberOfUsers] = useState(10)
    
    const [hasMore, setHasMore] = useState(true)

    function handleFilteredUsers() {
        if(props.isClicked) {
            if(isRequestFinished) {
                setIsRequestFinished(false)

                api.get(`/userfilter?username=${props.txtValue}&numberOfUsers=${numberOfUsers}`).then(response => {
                    setFoundUser(response.data.users)

                    setIsRequestFinished(true)

                    numberOfUsers < response.data.userLength ? numberOfUsers && setNumberOfUsers(numberOfUsers + 10) :
                        setHasMore(false)
                })
                .catch(err => {console.log(err)})
            }
        }
    }

    return (
        <Zoom in={props.isClicked} timeout={500}>
            <div className='SearchTab'>
                <h4>Results</h4>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={handleFilteredUsers}
                    hasMore={true}
                    initialLoad={true}
                    loader={hasMore ? <img src='https://i.ya-webdesign.com/images/loading-png-gif.gif' className='LoadingImage'/> : <h4 className='LoadingImage'>End</h4>}
                >
                    {foundUser.map(user => {
                        return (
                            <Zoom in={true} timeout={500}>
                                <div className='UserFiltered'>
                                    <a href={`/profile/${user.username}`}>
                                        <img src={user.userPhoto} className='PostUserIcon' />
                                        <h3>{user.username}</h3>
                                    </a>
                                </div>
                            </Zoom>
                        )
                    })}
                </InfiniteScroll>
            </div>
        </Zoom>
    )
}

export default SearchTab