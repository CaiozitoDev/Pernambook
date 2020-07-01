import api from '../../../services/API_CONFIG'

import jwt from 'jsonwebtoken'

export const handleMyProfileData = function() {
    let {db_user_id} = jwt.decode(localStorage.getItem('local_token'))

    return (
        api.get(`/profile-photo/${db_user_id}`)
            .then(response => {
                let userProfileConfig = response.data

                return userProfileConfig
            })
            .catch(err => {
                console.log(err)
            })
    )
}
