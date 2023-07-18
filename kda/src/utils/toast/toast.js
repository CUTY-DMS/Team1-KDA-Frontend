import { toast } from "react-toastify";

export const customToast = (message, type, action) => {
  switch (type) {
    case "success":
      toast.success(message ? message : "성공적으로 완료되었습니다.", {
        position:"top-left",
        autoClose:2000,
        limit:5
      });
      break;
    case "error":
      toast.error(message ? message : "다시 한번 시도해주세요.", {
        position:"top-left",
        autoClose:2000,
        limit:5
      });
      break;
    default:
      toast.error("개발자오류", {
        position:"top-left",
        autoClose:2000,
        limit:5
      });
      break;
  }
};
