import axios from 'axios'

export const handleMyProfileData = function() {
    let token = localStorage.getItem('local_token')

    return (
        axios.post('/profile-photo', {token})
            .then(response => {
                let userProfileConfig = response.data

                return userProfileConfig
            })
            .catch(err => {
                console.log(err)
            })

    )
}
