import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: "none",
});

export const studentEmail = atom({
  key: "studentEmail",
  default: "none",
});

export const gradeClass = atom({
  key: "gradeClass",
  default: {
    grade: "1",
    class: "1",
  },
});
