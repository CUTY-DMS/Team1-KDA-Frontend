import React from "react";
import { styled } from "styled-components";

function LandingPage() {
  const onSignin = () => {
    window.location.href = "/signIn";
  };
  const onSignUp = () => {
    window.location.href = "/signUp";
  };

  return (
    <Body>
      <Img>
        <img src='/images/logo.svg' alt='' />
      </Img>
      <MainText>
        <span>KDA</span>에 오신걸 환영합니다!
      </MainText>
      <BottomText>
        <span onClick={onSignin}>로그인</span>
        <span onClick={onSignUp}>회원가입</span>
      </BottomText>
    </Body>
  );
}

export default LandingPage;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  margin-top: 265px;
  width: 150px;
  height: 150px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const MainText = styled.div`
  margin-top: 40px;
  font-size: 48px;
  font-weight: bold;
  span {
    font-weight: 100;
    color: #609966;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const BottomText = styled.div`
  margin-top: 25px;
  width: 231px;
  height: 0px;
  display: flex;
  justify-content: space-between;
  span {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: #737373;
    font-size: 20px;
    font-weight: 300;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;
