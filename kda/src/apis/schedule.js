import instance from "./axios";

export const schedule = async (accessToken) => {
  const response = await instance.get(`/admin/schedule`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
