import React from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import Button from "../Button";
import logout from "../../../utils/func/logout";

function LogoutModal() {
  const closeModal = useResetRecoilState(modalState);

  const onClick = () => {
    logout();
  };

  return (
    <ModalBackground>
      <Body>
        <Container>
          <MainText>정말 로그아웃 하시겠습니까?</MainText>
          <BtnBox>
            <Button
              red={true}
              width={300}
              text='로그아웃'
              event={onClick}></Button>
            <Button
              red={true}
              width={300}
              text='취소하기'
              event={closeModal}></Button>
          </BtnBox>
        </Container>
      </Body>
    </ModalBackground>
  );
}

export default LogoutModal;

const Body = styled.div`
  width: 1200px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MainText = styled.div`
  font-size: 36px;
  font-weight: 350;
  text-align: center;
  margin-top: 50px;
`;

const BtnBox = styled.div`
  width: 660px;
  display: flex;
  justify-content: space-between;
`;
