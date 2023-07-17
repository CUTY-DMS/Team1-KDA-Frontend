import axios from "axios";
import { baseURL } from "./baseURL";

export const signUpPost = async (data) => {
    const {a} = baseURL; 
    const response = await axios.post(`${a}/admin/login`, data);
    console.log(`${a}/admin/login`);
    return response;
};
