import instance from "./axios";

export const notificationModify = async (data, accessToken) => {
  const response = await instance.patch(`/admin/fix`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
