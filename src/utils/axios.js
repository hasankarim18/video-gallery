import axios from 'axios'


const axiosInstance = axios.create({
    //  baseURL: 'http://localhost:9005'
    baseURL: 'https://lws18.herokuapp.com/'


});

export default axiosInstance 