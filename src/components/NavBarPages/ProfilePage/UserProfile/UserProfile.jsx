import React from 'react'

import Zoom from '@material-ui/core/Zoom'

import AreFriends from '../../../AreFriends'

import {Link} from 'react-router-dom'

function UserProfile({data, db_user_id, post}) {
    return (
        <Zoom in timeout={1000}>
            <div className='UserProfile'>
                <div className='ProfileHeader'>
                    <img src={data.photo} alt='img' />
                    <h2>{data.username}</h2>
                </div>

                <div className='UserInfo'>
                    {data.userId !== '' && data.userId !== db_user_id &&
                        <AreFriends db_user_id={db_user_id} postuserid={data.userId} />
                    }

                    <div className='UserExtraInfo'>
                        <table>
                            <tr>
                                <td className='TableTitle'><h4>N° Posts:</h4></td>
                                <td className='TableResult'>
                                    <h4>{post}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className='TableTitle'><h4>N° Friends</h4></td>
                                <td className='TableResult'>
                                    <h4>{data.friendsLength}</h4>
                                </td>
                            </tr>
                            <tr>
                                <td className='TableTitle'><h4>Date of creation:</h4></td>
                                <td className='TableResult'>
                                    <h4>{data.timestamp}</h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
                
                <Link to={`/friends/${data.userId}`} className='SeeFriends'>
                    <button className='btn btn-outline-light'>See {data.username} friends</button>
                </Link>
            </div>
        </Zoom>
    )
}

export default UserProfile