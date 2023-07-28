import axios from "axios";
import { refresh } from "./refresh";

const instance = axios.create({
  timeout: 2000,
});

instance.interceptors.response.use(refresh());

export default instance;
