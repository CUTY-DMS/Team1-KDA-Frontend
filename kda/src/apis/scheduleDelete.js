import instance from "./axios";

export const scheduleDel = async (accessToken, id) => {
  const response = await instance.delete(`/admin/schedule/${id}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
