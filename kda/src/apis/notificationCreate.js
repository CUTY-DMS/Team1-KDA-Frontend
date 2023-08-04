import axios from "axios";

export const notificationCreate = async (data, accessToken) => {
  const response = await axios.post(`/admin/write`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
