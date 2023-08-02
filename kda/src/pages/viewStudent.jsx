import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { viewStudent } from "../apis/viewStudent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { gradeClassState, modalState, studentEmail } from "../utils/atom/atom";

function StudentPage() {
  const [students, setStudents] = useState();
  const [gradeClass, setGradeClass] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

  const setModal = useSetRecoilState(modalState);
  const setEmail = useSetRecoilState(studentEmail);
  const viewGradeClass = useRecoilValue(gradeClassState);

  useEffect(() => {
    viewStudent(accessToken)
      .then((res) => {
        setStudents(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onDetailModal = (email, modalName) => {
    setModal(modalName);
    setEmail(email);
  };

  const onGradeClassChangeModal = (modalName) => {
    setModal(modalName);
  };

  return (
    <>
      <Header />
      <Body>
        <ListContainer>
          {students ? (
            students.length > 0 ? (
              students.map((student) =>
                student.grade == viewGradeClass.grade ? (
                  student.classes == viewGradeClass.class ? (
                    <ListContent>
                      <Img>
                        <img src='' />
                      </Img>
                      <TextBox>
                        <span>
                          {student.grade}
                          {student.classes}
                          {student.number.toString().padStart(2, "0")}&nbsp;
                          {student.name}
                        </span>
                        <span
                          onClick={() => {
                            onDetailModal(student.email, "student");
                          }}>
                          더보기
                        </span>
                      </TextBox>
                    </ListContent>
                  ) : null
                ) : null
              )
            ) : (
              <ErrorMsg>학생 정보가 없습니다</ErrorMsg>
            )
          ) : (
            <ErrorMsg>로딩중...</ErrorMsg>
          )}
        </ListContainer>
      </Body>
      <GradeClassChangeButton
        onClick={() => {
          onGradeClassChangeModal("gradeClass");
        }}>
        {viewGradeClass.grade} - {viewGradeClass.class}
      </GradeClassChangeButton>
    </>
  );
}

export default StudentPage;

const ErrorMsg = styled.div`
  width: 100%;
  margin-top: 20vh;
  font-size: 36px;
  display: flex;
  justify-content: center;
  margin-left: 50px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListContainer = styled.div`
  width: 1750px;
  display: flex;
  flex-wrap: wrap;
  margin-left: -50px;
`;

const ListContent = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  width: 300px;
  height: 100px;
  box-shadow: 0px 0px 5px 3px #609966;
  display: flex;
  align-items: center;
`;

const Img = styled.div`
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
`;

const TextBox = styled.div`
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  font-weight: 100;
  :last-child {
    color: #7c7c7c;
    font-size: 16px;
  }
`;

const GradeClassChangeButton = styled.div`
  width: 150px;
  height: 50px;
  background-color: #edf1d6;
  border-radius: 5px 5px 0px 0px;
  position: fixed;
  bottom: 0;
  right: 20px;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  line-height: 50px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease-in-out;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover {
    transform: scale(1.05);
  }
`;
