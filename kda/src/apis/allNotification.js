import instance from "./axios";

export const allNoti = async (accessToken) => {
  const response = await instance.get(`/admin/allNoti`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
