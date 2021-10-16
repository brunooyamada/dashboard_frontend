import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:44358/'
});

// api.interceptors.request.use(
//     (config) => {
//         config.headers.Authorization = `Bearer asdfghjkl123456789`

//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );


export default api;