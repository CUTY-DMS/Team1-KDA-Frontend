import axios from "axios";
import { baseURL } from "./baseURL";

export const informationModify = async (data) => {
  const { a } = baseURL;
  const response = await axios.patch(`${a}/admin/infoChange`, data);
  return response;
};
