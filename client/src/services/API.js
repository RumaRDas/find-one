import axios from 'axios';

const API = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:4000'
}
)
export default API;