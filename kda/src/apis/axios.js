import axios from "axios";
import { refresh } from "./refresh";

const instance = axios.create({
  timeout: 2000,
});

instance.interceptors.response.use(
  function (res) {
    return res;
  },
  function (err) {
    refresh().catch((err) => {
      window.location = "/";
    });
  }
);

export default instance;
