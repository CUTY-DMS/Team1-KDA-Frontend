import axios from "axios";

export const viewStudentDetail = async (accessToken, email) => {
  const response = await axios.get(`/admin/student/${email}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
