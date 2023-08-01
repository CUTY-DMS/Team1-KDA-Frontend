import React, { useEffect, useState } from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import { gradeClassState, modalState } from "../../../utils/atom/atom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GradeClassChangeModal() {
  const [selectedGradeClass, setSelectedGradeClass] = useState();
  const [viewGradeClass, setGradeClass] = useRecoilState(gradeClassState);

  const closeModal = useResetRecoilState(modalState);

  const onClick = (g, c) => {
    setGradeClass({ grade: g, class: c });
    console.log(viewGradeClass);
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSelectedGradeClass(
        parseInt(viewGradeClass.grade) * 10 + parseInt(viewGradeClass.class)
      );
      console.log(selectedGradeClass);
    }, 1);

    return () => clearTimeout(timeOut);
  }, [viewGradeClass]);

  return (
    <ModalBackground>
      <Body>
        <Container>
          <InnerContainer>
            <Btn
              onClick={() => {
                onClick(1, 1);
              }}
              gradeClass={11}
              gradeClassState={selectedGradeClass}>
              1 - 1
            </Btn>
            <Btn
              onClick={() => {
                onClick(1, 2);
              }}
              gradeClass={12}
              gradeClassState={selectedGradeClass}>
              1 - 2
            </Btn>
            <Btn
              onClick={() => {
                onClick(1, 3);
              }}
              gradeClass={13}
              gradeClassState={selectedGradeClass}>
              1 - 3
            </Btn>
            <Btn
              onClick={() => {
                onClick(1, 4);
              }}
              gradeClass={14}
              gradeClassState={selectedGradeClass}>
              1 - 4
            </Btn>
          </InnerContainer>
          <InnerContainer>
            <Btn
              onClick={() => {
                onClick(2, 1);
              }}
              gradeClass={21}
              gradeClassState={selectedGradeClass}>
              2 - 1
            </Btn>
            <Btn
              onClick={() => {
                onClick(2, 2);
              }}
              gradeClass={22}
              gradeClassState={selectedGradeClass}>
              2 - 2
            </Btn>
            <Btn
              onClick={() => {
                onClick(2, 3);
              }}
              gradeClass={23}
              gradeClassState={selectedGradeClass}>
              2 - 3
            </Btn>
            <Btn
              onClick={() => {
                onClick(2, 4);
              }}
              gradeClass={24}
              gradeClassState={selectedGradeClass}>
              2 - 4
            </Btn>
          </InnerContainer>
          <InnerContainer>
            <Btn
              onClick={() => {
                onClick(3, 1);
              }}
              gradeClass={31}
              gradeClassState={selectedGradeClass}>
              3 - 1
            </Btn>
            <Btn
              onClick={() => {
                onClick(3, 2);
              }}
              gradeClass={32}
              gradeClassState={selectedGradeClass}>
              3 - 2
            </Btn>
            <Btn
              onClick={() => {
                onClick(3, 3);
              }}
              gradeClass={33}
              gradeClassState={selectedGradeClass}>
              3 - 3
            </Btn>
            <Btn
              onClick={() => {
                onClick(3, 4);
              }}
              gradeClass={34}
              gradeClassState={selectedGradeClass}>
              3 - 4
            </Btn>
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
`;

const Btn = styled.div`
  transition: 0.1s ease-in-out;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: ${(props) =>
    props.gradeClass === props.gradeClassState ? "900" : "100"};
  background-color: ${(props) =>
    props.gradeClass === props.gradeClassState ? "#609966" : "#f0f0f0"};
  color: ${(props) =>
    props.gradeClass === props.gradeClassState ? "white" : "black"};
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const CloseBtn = styled.div`
  width: 50px;
  margin-top: 5px;
  display: flex;
  justify-content: end;
  margin-right: 20px;
`;
