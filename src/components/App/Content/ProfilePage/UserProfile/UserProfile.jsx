import React, { useEffect, useState } from 'react'

import api from '../../../../../services/API_CONFIG'

import { useParams } from 'react-router-dom'

function UserProfile() {
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        age: '',
    })

    const {username} = useParams()
    
    useEffect(() => {
        // IMPORTA OS DADOS
        api.get(`/profile/${username}`)
        .then(response => {
            setUserData(preValue => {
                return {
                    ...preValue,
                    src: response.data.src,
                    username: response.data.username
                }
            })
        })
        .catch(err => {console.log(err)})
    })

    return (
        <div className='UserProfile'>
            <img src={userData.src} alt='img' />
            <div className='UserInfo'>
                <h2>{userData.username}</h2>
                <div className='UserExtraInfo'>
                    <table>
                        <tr>
                            <td className='TableTitle'><h4>Sex:</h4></td>
                            <td className='TableResult'>
                                <h4>Male</h4>
                            </td>
                        </tr>
                        <tr>
                            <td className='TableTitle'><h4>Age:</h4></td>
                            <td className='TableResult'>
                                <h4>{userData.age}</h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserProfile