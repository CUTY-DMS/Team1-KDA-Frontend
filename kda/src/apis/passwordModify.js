import axios from "axios";

export const passwordModify = async (data) => {
  const response = await axios.patch(`/admin/password/change`, data);
  return response;
};
