import instance from "./axios";

export const viewStudent = async (accessToken) => {
  const response = await instance.get(`/admin/student/list`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
