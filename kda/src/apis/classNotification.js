import instance from "./axios";

export const classNoti = async (accessToken, grade, classes) => {
  const response = await instance.get(`/admin/classNoti/${classes}/${grade}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
