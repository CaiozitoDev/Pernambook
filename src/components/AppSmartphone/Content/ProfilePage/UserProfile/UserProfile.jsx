import React, {useEffect, useState} from 'react'

import Zoom from '@material-ui/core/Zoom'

import {useParams} from 'react-router-dom'

import api from '../../../../../services/API_CONFIG'

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
    }, [])

    return (
        <Zoom in={true} timeout={1000}>
            <div className='UserProfile'>
                <img src={userData.src} alt='img' />
                <div className='UserInfo'>
                    <h2>{userData.username}</h2>
                    <table className='UserExtraInfo'>
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
        </Zoom>
    )
}

export default UserProfile