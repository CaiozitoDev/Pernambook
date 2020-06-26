import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function Friend(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='Friend'>
                <a href={`/profile/${props.frienddata.username}`}>
                    <li>
                        <img src={props.frienddata.photo} alt='img' />
                        <div className='UserInfo'>
                            <h3>{props.frienddata.username}</h3>
                        </div>
                    </li>
                </a>
            </div>
        </Zoom>
    )
}

export default Friend