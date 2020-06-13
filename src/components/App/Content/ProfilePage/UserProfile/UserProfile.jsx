import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {handleMyProfileData} from '../../../../functions/LoadProfilePhoto/LoadProfilePhoto'

import { useParams } from 'react-router-dom'

function UserProfile() {
    const [userData, setUserData] = useState({
        src: 'https://i.ya-webdesign.com/images/loading-png-gif.gif',
        username: '',
        age: '',
    })

    const {id} = useParams()

    useEffect(() => {
        // IMPORTA A PROFILE PHOTO
        handleMyProfileData().then(data => {
            setUserData(preValue => {
                return {...preValue, src: data.src}
            })
        })
        // IMPORTA O RESTO DOS DADOS
        axios.get(`/profile/${id}`)
        .then(response => {
            setUserData(preValue => {
                return {
                    ...preValue,
                    username: response.data.username,
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