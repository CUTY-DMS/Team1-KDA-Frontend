import axios from "axios";

export const refresh = async () => {
  const token = localStorage.getItem("refreshToken");
  const CAToken = localStorage.getItem("accessToken");
  console.log(token);
  const response = await axios.post("/reissue", null, {
    headers: {
      AUTHORIZATION_HEADER: token,
    },
  });
  const NAToken = response.data.accessToken;
  if (CAToken == NAToken) {
    return;
  } else {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", NAToken);
    window.location.reload();
  }
};
