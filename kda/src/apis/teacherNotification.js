import instance from "./axios";

export const teachNoti = async (accessToken) => {
  const response = await instance.get(`/admin/teacherNoti`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
