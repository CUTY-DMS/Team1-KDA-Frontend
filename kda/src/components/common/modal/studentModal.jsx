import React from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StudentModal() {
  const closeModal = useResetRecoilState(modalState);

  return (
    <ModalBackground>
      <Body>
        <Container1>
          <MainInfo>
            <Img>
              <img src=""/>
            </Img>
            <div>
              <span>박의엘</span>
              <span>christian@gmail.com</span>
            </div>
          </MainInfo>
          <SubInfo>
            <div>
              <span>이름</span>
              <span>박의엘</span>
            </div>
            <div>
              <span>이메일</span>
              <span>christian@gmail.com</span>
            </div>
            <div>
              <span>학번</span>
              <span>1307</span>
            </div>
            <div>
              <span>생년월일</span>
              <span>07-05-19</span>
            </div>
            <div>
              <span>전공</span>
              <span>IOS</span>
            </div>
            <div>
              <span>동아리</span>
              <span>정민</span>
            </div>
          </SubInfo>
        </Container1>
        <Line></Line>
        <Container2>
          <CloseBtn>
            <FontAwesomeIcon icon={faXmark} fontSize={30} onClick={closeModal}/>
          </CloseBtn>
        </Container2>
      </Body>
    </ModalBackground>
  )
}

export default StudentModal;

const Body = styled.div`
  width:1200px;
  height:600px;
  background-color:white;
  display:flex;
`;

const Container1 = styled.div`
  width:599.5px;
  height:600px;
  display:flex;
  flex-direction:column;
`;

const MainInfo = styled.div`
  margin-top:50px;
  margin-left:50px;
  width:550px;
  height:150px;
  display:flex;
  > :last-child {
    margin-left:50px;
    height:150px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    :first-child {
      font-size:32px;
      font-weight:700;
    }
    :last-child {
      font-size:18px;
      font-weight:100;
      color:#7C7C7C;
    }
  }
`;

const Img = styled.div`
  border:1px black solid;
  border-radius:50%;
  width:150px;
  height:150px;
`;

const SubInfo = styled.div`
  margin-left:102px;
  div {
    margin-top:30px;
    :first-child {
      display:inline-block;
      width:120px;
      color:#7C7C7C;
      font-size:20px;
      font-weight:100;
    }
    :last-child {
      font-size:20px;
      color:#7C7C7C;
    }
  }
`;

const Container2 = styled.div`
  width:599.5px;
  height:600px;
`;

const Line = styled.div`
  width:1px;
  height:500px;
  margin-top:50px;
  background-color:#609966;
`;

const CloseBtn = styled.div`
  display:flex;
  justify-content:end;
  margin-right:20px;
  margin-top:5px;
`;