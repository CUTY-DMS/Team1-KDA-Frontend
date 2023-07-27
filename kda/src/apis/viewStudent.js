import axios from "axios";

export const viewStudent = async (accessToken) => {
  const response = await axios.get(`/admin/student/list`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
