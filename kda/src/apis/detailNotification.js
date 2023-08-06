import instance from "./axios";

export const detailNoti = async (accessToken, data) => {
  const response = await instance.get(`/noti/check/${data}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
