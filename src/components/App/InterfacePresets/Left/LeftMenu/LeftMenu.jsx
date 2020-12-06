import React, {useContext} from 'react'

import NewPostForm from './NewPostForm/NewPostForm'
import LeftOptions from './ListConfigs/ListConfigs'
import MyProfile from './MyProfile/MyProfile'

import {AuthContext} from '../../../../Contexts'

import {Slide} from '@material-ui/core'

function LeftMenu() {
    let {userData} = useContext(AuthContext)

    return (
        <Slide direction='up' in timeout={1000} mountOnEnter>
            <div className='LeftMenu'>
                <NewPostForm id={userData.db_user_id} />
                <hr />
                <LeftOptions id={userData.db_user_id} />
                <MyProfile username={userData.username} photo={userData.photo}/>
                <hr />
            </div>
        </Slide>
    )
}

export default LeftMenu