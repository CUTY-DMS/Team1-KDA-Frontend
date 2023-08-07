import React from "react";
import { useRecoilValue } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import PasswordChangeModal from "./passwordChangeModal";
import InformationChangeModal from "./informationChangeModal";
import GradeClassChangeModal from "./gradeClassChangeModal";
import StudentModal from "./studentModal";
import LogoutModal from "./logoutModal";
import ScheduleCreateModal from "./scheduleCreateModal";

export const Modal = () => {
  const modal = useRecoilValue(modalState);

  switch (modal) {
    case "none":
      return null;
    case "information":
      return <InformationChangeModal />;
    case "password":
      return <PasswordChangeModal />;
    case "gradeClass":
      return <GradeClassChangeModal />;
    case "student":
      return <StudentModal />;
    case "logout":
      return <LogoutModal />;
    case "scheduleCreate":
      return <ScheduleCreateModal />;
    default:
      return null;
  }
};
