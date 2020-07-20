import useSWR from 'swr'
import api from '../services/API_CONFIG'

export default function useFetch(url) {
    return (
        useSWR(url, () => {
            const result = api.get(url).then(response => {
                return response.data
            })
    
            return result
        })
    )
}