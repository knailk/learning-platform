import axios from 'axios';

const request = axios.create({
    baseURL: "http://localhost:8080/v1/",
    // baseURL: 'http://ec2-3-0-139-245.ap-southeast-1.compute.amazonaws.com:8080/v1/',
    withCredentials: true,
});

export default request;
