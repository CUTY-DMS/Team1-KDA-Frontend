import React from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";

function FindPassword() {
  const onSignIn = () => {
    window.location.href = "/signIn";
  };
  const onSignUp = () => {
    window.location.href = "/signUp";
  };

  return (
    <Body>
      <TopBox>
        <Title>비밀번호 찾기</Title>
        <Img>
          <img src='/images/signpagelogo.svg' alt='' />
        </Img>
      </TopBox>
      <InputBox>
        <TextField type='email' width={1000} height={50} text='이메일' />
        <TextField type='password' width={1000} height={50} text='인증코드' />
      </InputBox>
      <BottomBox>
        <Button red={false} width={300} text='인증코드 보내기'></Button>
      </BottomBox>
      <LinkBox>
        <span onClick={onSignIn}>로그인</span>
        <span onClick={onSignUp}>회원가입</span>
      </LinkBox>
    </Body>
  );
}

export default FindPassword;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  width: 200px;
  height: 200px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 40px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 200px;
  align-items: center;
  margin-top: 40px;
`;

const InputBox = styled.div`
  width: 1000px;
  margin-top: 50px;
  :last-child {
    margin-top: 70px;
  }
`;

const BottomBox = styled.div`
  width: 1000px;
  margin-top: 70px;
  display: flex;
  justify-content: end;
`;

const LinkBox = styled.div`
  width: 1000px;
  display: flex;
  span {
    font-weight: 100;
    font-size: 20px;
    cursor: default;
    margin-top: 5px;
    color: #7c7c7c;
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  :first-child {
    margin-left: 765px;
  }
  :last-child {
    margin-left: 59px;
  }
`;
