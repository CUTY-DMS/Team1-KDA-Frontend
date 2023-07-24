import React from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GradeClassChangeModal() {
  const closeModal = useResetRecoilState(modalState);

  return (
    <ModalBackground>
      <Body>
        <Container>
          <InnerContainer>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
          </InnerContainer>
          <InnerContainer>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
          </InnerContainer>
          <InnerContainer>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
            <div>1 - 1</div>
          </InnerContainer>
        </Container>
        <CloseBtn>
          <FontAwesomeIcon icon={faXmark} fontSize={30} onClick={closeModal} />
        </CloseBtn>
      </Body>
    </ModalBackground>
  );
}

export default GradeClassChangeModal;

const Body = styled.div`
  width: 1200px;
  height: 450px;
  background-color: white;
  display: flex;
`;

const Container = styled.div`
  margin-left: 50px;
  width: 1100px;
  height: 450px;
  display: flex;
  flex-direction: column;
  > :nth-child(2) {
    border-top: 1px #609960 solid;
    border-bottom: 1px #609960 solid;
  }
`;

const InnerContainer = styled.div`
  width: 1100px;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    width: 100px;
    height: 100px;
    background-color: #f0f0f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 100;
  }
`;

const CloseBtn = styled.div`
  width: 50px;
  margin-top: 5px;
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;
