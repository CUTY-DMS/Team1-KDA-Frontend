import instance from "./axios";

export const deleteNoti = async (accessToken, id) => {
  const response = await instance.delete(`/admin/delete${id}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
