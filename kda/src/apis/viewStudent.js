import axios from "axios";
import { baseURL } from "./baseURL";
import { json } from "react-router-dom";

export const viewStudent = async (data) => {
    const {a} = baseURL; 
    const response = await axios.get(`${a}/admin/student/list`, {
        params: {
            gradeClass:`${data}`
        },
        headers: {
            Authorization:"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxYWRtaW4uY29tIiwicm9sZXMiOiJST0xFX0FETUlOIiwiaWF0IjoxNjg5ODM2NjY5LCJleHAiOjE2ODk4Mzg0Njl9.m7VsVCAzR_COCaGO0aXkEEfmM9xf_-49o3JaVS1ZYnA"
        },
    });
    return response;
};
