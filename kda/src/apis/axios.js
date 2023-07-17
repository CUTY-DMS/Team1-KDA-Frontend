import axios from "axios";

const instance = axios.create({
  baseURL: `https://f130-119-203-74-86.ngrok-free.app`,
  timeout: 2000,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    accessToken &&
      (config.headers = { Authorization: `Bearer ${accessToken}` });
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;