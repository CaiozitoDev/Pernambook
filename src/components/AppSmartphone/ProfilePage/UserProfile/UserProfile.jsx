import React from 'react'

import Zoom from '@material-ui/core/Zoom'

function UserProfile() {
    return (
        <Zoom in='true'>
            <div className='UserProfile'>
                <img src={window.location.origin + '/fds/EWkV9JuWAAIqrZh.jpg'} />
                <div className='UserInfo'>
                    <h2>Caio Felipe</h2>
                    <h4>@CaioReidaFarofa</h4>
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
                                <h4>17</h4>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </Zoom>
    )
}

export default UserProfile