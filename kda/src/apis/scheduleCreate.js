import axios from "axios";

export const scheduleCreate = async (data, accessToken) => {
  const response = await axios.post(`/admin/schedule`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
