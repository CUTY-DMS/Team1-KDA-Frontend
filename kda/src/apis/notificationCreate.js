import instance from "./axios";

export const notificationCreate = async (data, accessToken) => {
  const response = await instance.post(`/admin/write`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
