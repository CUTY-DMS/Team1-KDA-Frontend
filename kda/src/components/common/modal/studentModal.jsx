import React, { useEffect, useState } from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { modalState, studentEmail } from "../../../utils/atom/atom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { viewStudentDetail } from "../../../apis/viewStudentDetail";
import { customToast } from "../../../utils/toast/customToast";

function StudentModal() {
  const closeModal = useResetRecoilState(modalState);
  const email = useRecoilValue(studentEmail);
  const [information, setInformation] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    viewStudentDetail(accessToken, email)
      .then((res) => {
        setInformation(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        window.location.reload();
      });
  }, []);

  return (
    <ModalBackground>
      <Body>
        {information ? (
          <>
            <Container1>
              <MainInfo>
                <Img>
                  <img src='' />
                </Img>
                <div>
                  <span>{information.name}</span>
                  <span>{information.email}</span>
                </div>
              </MainInfo>
              <SubInfo>
                <div>
                  <span>이름</span>
                  <span>{information.name}</span>
                </div>
                <div>
                  <span>이메일</span>
                  <span>{information.email}</span>
                </div>
                <div>
                  <span>학번</span>
                  <span>{information.classId}</span>
                </div>
                <div>
                  <span>생년월일</span>
                  <span>{information.birth}</span>
                </div>
                <div>
                  <span>전공</span>
                  <span>{information.majorField}</span>
                </div>
                <div>
                  <span>동아리</span>
                  <span>{information.clubName}</span>
                </div>
              </SubInfo>
            </Container1>
            <Line></Line>
            <Container2>
              <CloseBtn>
                <FontAwesomeIcon
                  icon={faXmark}
                  fontSize={30}
                  onClick={closeModal}
                />
              </CloseBtn>
            </Container2>
          </>
        ) : null}
      </Body>
    </ModalBackground>
  );
}

export default StudentModal;

const Body = styled.div`
  width: 1200px;
  height: 600px;
  background-color: white;
  display: flex;
`;

const Container1 = styled.div`
  width: 599.5px;
  height: 600px;
  display: flex;
  flex-direction: column;
`;

const MainInfo = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  width: 550px;
  height: 150px;
  display: flex;
  > :last-child {
    margin-left: 50px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :first-child {
      font-size: 32px;
      font-weight: 700;
    }
    :last-child {
      font-size: 18px;
      font-weight: 100;
      color: #7c7c7c;
    }
  }
`;

const Img = styled.div`
  border: 1px black solid;
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const SubInfo = styled.div`
  margin-left: 102px;
  div {
    margin-top: 30px;
    :first-child {
      display: inline-block;
      width: 120px;
      color: #7c7c7c;
      font-size: 20px;
      font-weight: 100;
    }
    :last-child {
      font-weight: 350;
      font-size: 20px;
      color: black;
    }
  }
`;

const Container2 = styled.div`
  width: 599.5px;
  height: 600px;
`;

const Line = styled.div`
  width: 1px;
  height: 500px;
  margin-top: 50px;
  background-color: #609966;
`;

const CloseBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: end;
  margin-right: 20px;
  margin-top: 5px;
`;
