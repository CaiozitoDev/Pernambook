import axios from 'axios'

export default function AxiosLoginRegisterSchema(route, data, header) {
    axios.post(route, data, header && header)
    .then(response => {
        if(response.data.redirect) {
            console.log(response.data)
            localStorage.setItem('local_token', response.data.token)
            window.location = '/home'
        } else {
            console.log(response.data)
        }
    })
    .catch(err => {
        console.log(err)
    })
}