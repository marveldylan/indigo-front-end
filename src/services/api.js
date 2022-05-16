import axios from 'axios';

export const BASE_URL = 'http://localhost:3001';

let apiUrl = process.env.NODE_ENV === 'production' ? 'https://indigo-back-end.herokuapp.com/' : 'http://localhost:3001'

const Client = axios.create({ baseURL: 'https://indigo-back-end.herokuapp.com/'});
console.log(apiUrl)
Client.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export default Client