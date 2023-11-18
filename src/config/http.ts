// node_modules
import axios from "axios";
// constants
import { STATUS_CODES } from "@/constants";

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

http.interceptors.request.use(
  (config) => {
    let newConfig = config;
    // If our project had a login and register, we could receive the token here and use it:
    // newConfig.headers.Authorization = `Bearer ${cookies.jwtToken}`;
    return newConfig;
  },
  (error) => {
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    response.headers["accept"] = "application/json";
    response.headers["content-type"] = "application/json";
    response.config.headers["Accept"] = "application/json";
    response.config.headers["Content-Type"] = "application/json";

    return response;
  },
  (error) => {
    if (error.response.status === STATUS_CODES.FORBIDDEN) {
      window.location.href = "/login";
    } else if (error.response.status === STATUS_CODES.UNTHORIZED) {
      window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default http;
