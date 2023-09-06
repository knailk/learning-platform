import axios from "axios";

const request = axios.create({
  baseURL: "http://ec2-3-0-139-245.ap-southeast-1.compute.amazonaws.com:8080/v1/",
});

export const setAuthToken = (token) => {
  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete request.defaults.headers.common["Authorization"];
  }
};

export default request;
