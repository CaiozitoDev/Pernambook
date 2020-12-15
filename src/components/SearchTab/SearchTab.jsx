import React, {useState, useEffect} from 'react'

import {Zoom} from '@material-ui/core'

import api from '../../services/API_CONFIG'

import InfiniteScroll from 'react-infinite-scroller'

import {Link} from 'react-router-dom'

function SearchTab({input, isClicked, device}) {
    const [foundUser, setFoundUser] = useState([])

    const [numberOfUsers, setNumberOfUsers] = useState({
        from: 0,
        to: 5
    })
    
    const [hasMore, setHasMore] = useState(true)

    function resetHandle() {
        setNumberOfUsers({
            from: 0,
            to: 5
        })
        
        api.get(`/userfilter?username=${input}&from=${0}&to=${5}`).then(response => {
            setFoundUser(response.data.users)

            setNumberOfUsers(preValue => {
                return {
                    from: preValue.from + response.data.users.length,
                    to: (preValue.from + response.data.users.length) + 3
                }
            })

            if(response.data.users.length < 5) {
                setHasMore(false)
            }
        })
    }

    useEffect(resetHandle, [input])
    useEffect(() => {
        if(isClicked) resetHandle()
    }, [isClicked])

    function handleFilteredUsers() {
        api.get(`/userfilter?username=${input}&from=${numberOfUsers.from}&to=${numberOfUsers.to}`).then(response => {
            setFoundUser(preValue => {
                return [
                    ...preValue,
                    ...response.data.users
                ]
            })

            setNumberOfUsers(preValue => {
                return {
                    from: preValue.from + response.data.users.length,
                    to: (preValue.from + response.data.users.length) + 3
                }
            })

            if(numberOfUsers.from >= response.data.allUsersLength){
                setHasMore(false)
            }
        })
        .catch(err => {console.log(err)})
    }

    return (
        <Zoom in={isClicked} timeout={500}>
            <div className={`${device == 'desktop' && 'col-4'} SearchTab`}>
                <h4>{hasMore ? 'Results' : 'Search completed'}</h4>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={handleFilteredUsers}
                    hasMore
                    initialLoad={false}
                    loader={hasMore && <img src={process.env.PUBLIC_URL + '/loading-png-gif.gif'} className='LoadingImage'/>}
                    useWindow={false}
                    threshold={5}
                >
                    {foundUser.map(user => {
                        return (
                            <Zoom in={true} timeout={500} key={user._id}>
                                <div className='UserFiltered'>
                                    <Link to={`/profile/${user._id}`}>
                                        <img src={user.photo} className='PostUserIcon' />
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