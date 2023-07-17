import instance from "./axios";
import axios from "axios";

export const signUpPost = async (data) => {
    const response = await axios.post("http://192.168.1.117:8080/admin/signup", data);
    return response;
};
