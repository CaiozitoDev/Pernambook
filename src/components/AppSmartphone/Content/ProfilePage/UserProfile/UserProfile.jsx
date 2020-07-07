import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import AreFriends from '../../../../AreFriends'

function UserProfile(props) {
    return (
        <Zoom in={true} timeout={1000}>
            <div className='UserProfile'>
                <div className='ProfileHeader'>
                    <img src={props.data.src} alt='img' />
                    <h2>{props.data.username}</h2>
                </div>

                <div className='UserInfo'>
                    {props.userid !== props.db_user_id &&
                        <AreFriends db_user_id={props.db_user_id} postuserid={props.userid} />
                    }

                    <div className='UserExtraInfo'>
                        <table>
                            <tr>
                                <td className='TableTitle'><h4>N° Posts:</h4></td>
                                <td className='TableResult'>
                                    <h4>{props.post}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className='TableTitle'><h4>N° Friends</h4></td>
                                <td className='TableResult'>
                                    <h4>{props.data.friendslength}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className='TableTitle'><h4>Date of creation:</h4></td>
                                <td className='TableResult'>
                                    <h4>{props.data.date.substring(0, 10)}</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <a href={`/friends/${props.data.username}`}><button className='btn btn-outline-light'>See {props.data.username} friends</button></a>
            </div>
        </Zoom>
    )
}

export default UserProfile