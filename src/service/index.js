import axios from 'axios';

const BASE_URL_PREFIX = import.meta.env.VITE_API_BASEURL;

const axiosInstance = axios.create({
  baseURL: '/api' || BASE_URL_PREFIX,
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/json',
    withCredentials: true,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }
    return response;
  },
  (err) => {
    return Promise.reject(err);
  },
);

const http = {
  get(url, params) {
    return axiosInstance.get(url, { params });
  },
  post(url, data, params) {
    if (typeof params === 'object') {
      return axiosInstance.post(url, data, { params });
    }
    return axiosInstance.post(url, data);
  },
};

export default http;
