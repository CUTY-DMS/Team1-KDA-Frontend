import axios from "axios";

export const signInPost = async (data) => {
  const response = await axios.post(`/admin/login`, data);
  return response;
};
