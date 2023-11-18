// node_modules
import axios from "axios";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // timeout: 20000,
});

http.interceptors.request.use(
  (request) => {
    // We can do somethinge here before request is sent

    // ...
    return request;
  },
  (error) => {
    // We can do something with error raised from request

    // ...
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    // We can do something with response

    // ...
    return response;
  },
  (error) => {
    // We can do something with response error

    // ...
    return Promise.reject(error);
  }
);

export default http;
