import api from '../../services/API_CONFIG'

export default function AxiosLoginRegisterSchema(route, data, header) {
    return (
        api.post(route, data, header && header)
        .then(response => {
            if(response.data.redirect) {
                console.log(response.data)
                localStorage.setItem('local_token', response.data.token)
                window.location = '/home'
                return {result: response.data.message}
            } else {
                console.log(response.data)
                return {result: response.data.message}
            }
        })
        .catch(err => {
            console.log(err)
        })
    )
}