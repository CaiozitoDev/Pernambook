import useSWR from 'swr'
import api from '../services/API_CONFIG'

export default function UseFetch(url) {
    const {data, mutate, error} = useSWR(url, () => {
        return (
            api.get(url).then(response => {
                return response.data
            }).catch(err => {
                console.log(err)
            })
        )
    })

    return {data, mutate, error}
}