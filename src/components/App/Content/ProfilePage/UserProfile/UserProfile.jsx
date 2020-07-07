import React from 'react'

import AreFriends from '../../../../AreFriends'

function UserProfile(props) {
    return (
        <div className='UserProfile'>
            <img src={props.data.src} alt='img' />
            <div className='UserInfo'>
                <h2>{props.data.username}</h2>

                {props.userid !== props.db_user_id &&
                    <AreFriends db_user_id={props.db_user_id} postuserid={props.userid} />
                }

                <div className='UserExtraInfo'>
                    <table>
                        <tr>
                            <td className='TableTitle'><h4>N° Posts:</h4></td>
                            <td className='TableResult'>
                                <h4>23</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='TableTitle'><h4>N° Friends</h4></td>
                            <td className='TableResult'>
                                <h4>54</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='TableTitle'><h4>Date of creation:</h4></td>
                            <td className='TableResult'>
                                <h4>2020-04-12</h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserProfile