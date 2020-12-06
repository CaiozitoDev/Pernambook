import React, {useState} from 'react'

import {Zoom} from '@material-ui/core'

import api from '../../../../../../../services/API_CONFIG'

import InfiniteScroll from 'react-infinite-scroller'

import {Link} from 'react-router-dom'

function SearchTab(props) {
    const [foundUser, setFoundUser] = useState([])

    const [isRequestFinished, setIsRequestFinished] = useState(true)

    const [numberOfUsers, setNumberOfUsers] = useState({
        from: 0,
        to: 10
    })

    const [allUsersLength, setAllUsersLength] = useState(0)
    
    const [hasMore, setHasMore] = useState(true)

    function handleFilteredUsers() {
        if(props.isClicked) {
            if(isRequestFinished) {
                setIsRequestFinished(false)

                api.get(`/userfilter?username=${props.txtValue}&from=${numberOfUsers.from}&to=${numberOfUsers.to}`).then(response => {
                    setFoundUser(preValue => {
                        return [
                            ...preValue,
                            response.data.users
                        ]
                    })
                    
                    setIsRequestFinished(true)

                    if(allUsersLength < response.data.allUsersLength) {
                        setAllUsersLength(response.data.allUsersLength)
                        setNumberOfUsers(preValue => {
                            return {
                                from: preValue.from + 10,
                                to: preValue.to + 10
                            }
                        })
                    } else {
                        setHasMore(false)
                    }
                })
                .catch(err => {console.log(err)})
            }
        }
    }

    return (
        <Zoom in={props.isClicked} timeout={500}>
            <div className='col-4 SearchTab'>
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
                                    <Link to={`/profile/${user.username}`}>
                                        <img src={user.userPhoto} className='PostUserIcon' />
                                        <h3>{user.username}</h3>
                                    </Link>
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