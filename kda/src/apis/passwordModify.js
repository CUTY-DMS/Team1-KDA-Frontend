import axios from "axios";

export const passwordModify = async (data, accessToken) => {
  const response = await axios.patch(`/admin/password/change`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
