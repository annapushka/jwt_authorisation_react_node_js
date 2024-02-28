import axios from 'axios'

export const API_URL = 'http://localhost:5050/api'

const $api = axios.create({
    baseURL: API_URL,
    withCredentials: true,

})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api