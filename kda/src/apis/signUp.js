import axios from "axios";

export const signUpPost = async (data) => {
  const response = await axios.post(`/admin/signup`, data);
  return response;
};
