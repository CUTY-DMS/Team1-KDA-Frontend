import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: "none",
});

export const studentEmail = atom({
  key: "studentEmail",
  default: "none",
});

export const gradeClassState = atom({
  key: "gradeClassState",
  default: {
    grade: "1",
    class: "1",
  },
});

export const myInfoState = atom({
  key: "myInfoState",
  default: null,
});
