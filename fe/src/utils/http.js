import axios from 'axios';

const request = axios.create({
    // baseURL: "http://localhost:8080/v1/",
    baseURL: 'https://api.giongedu.store/v1/',
    withCredentials: true,
});

export default request;
