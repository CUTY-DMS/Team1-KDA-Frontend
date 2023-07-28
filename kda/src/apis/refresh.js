import axios from "axios";

export const refresh = async () => {
  const token = localStorage.getItem("refreshToken");
  console.log(token);
  const response = await axios.post("/reissue", null, {
    headers: {
      AUTHORIZATION_HEADER: token,
    },
  });
  return response;
};
