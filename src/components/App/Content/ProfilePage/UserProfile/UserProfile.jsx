import React from 'react'

function UserProfile() {
    return (
        <div className='UserProfile'>
            <img src={window.location.origin + '/fds/EWkV9JuWAAIqrZh.jpg'} alt='img' />
            <div className='UserInfo'>
                <h2>Caio Felipe</h2>
                <h4>@CaioReidaFarofa</h4>
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
                                <h4>17</h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UserProfile