import instance from "./axios";

export const viewStudentDetail = async (accessToken, email) => {
  const response = await instance.get(`/admin/student/${email}`, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
