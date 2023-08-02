const logout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("myInfo");
  window.location.reload();
};

export default logout;
