import axios from "axios";
import axiosRetry from "axios-retry";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "content-type": "application/json",
  },
  timeout: 60000,
});

axiosRetry(api, {
  retries: 2,
  retryCondition: (err) => {
    if (
      err?.response?.status >= 500 ||
      err?.response?.status === 307 ||
      err?.response?.status === 0 ||
      err?.request?.status === 0
    ) {
      return true;
    }
    return false;
  },
});

api.interceptors.request.use((config) => {
  config.startTime = Date.now();
  return config;
});

api.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.json());
    if (error?.response?.status === 403) {
    }
    if (error?.response?.status === 401) {
    }
    throw error;
  }
);

export default api;
