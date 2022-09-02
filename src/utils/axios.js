import axios from 'axios'


const axiosInstance = axios.create({
    // baseURL: 'http://localhost:9000'
    baseURL: 'http://localhost:9001/videos/'
});

export default axiosInstance 