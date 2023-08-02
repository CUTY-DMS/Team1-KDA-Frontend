import instance from "./axios";

export const myInfo = async (accessToken) => {
  const response = await instance.get(`/admin/myPage`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
