import axios from "axios";

export const informationModify = async (data, accessToken) => {
  const response = await axios.patch(`/admin/infoChange`, data, {
    headers: {
      Authorization: accessToken,
    },
  });
  return response;
};
