import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:9000/v1/",
});

export const setAuthToken = (token) => {
  if (token) {
    request.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete request.defaults.headers.common["Authorization"];
  }
};

export default request;
