import React from 'react'

import {Zoom} from '@material-ui/core'

function SearchTab(props) {
    return (
        <Zoom in={props.isClicked} timeout={500}>
            <div className='SearchTab'>
                <h4>Results</h4>
                {props.foundUser.map(user => {
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
            </div>
        </Zoom>
    )
}

export default SearchTab