import React from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";

function SignInPage() {
    const onForgetPassword = () => {
        window.location.href = "/forgetPassword";
    };

    return (
        <Body>
            <TopBox>
                <Title>로그인</Title>
                <Img><img src="/images/signpagelogo.svg" alt="" /></Img>
            </TopBox>
            <InputBox>
                <TextField type="email" width={1000} height={50} text="이메일"/>
                <TextField type="password" width={1000} height={50} text="비밀번호"/>
            </InputBox>
            <LinkBox>
                <span>비밀번호를 잊으셨나요?&nbsp;&nbsp;</span>
                <span onClick={onForgetPassword}>비밀번호 찾기</span>
            </LinkBox>
        </Body>
    )
}

export default SignInPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const Img = styled.div`
    width:200px;
    height:200px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const Title = styled.div`
    font-weight:bold;
    font-size:40px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const TopBox = styled.div`
    display:flex;
    justify-content:space-between;
    width:1000px;
    height:200px;
    align-items:center;
    margin-top:49px;
`;

const InputBox = styled.div`
    width:1000px;
    margin-top:50px;
    :last-child {
        margin-top:70px;
    }
`;

const LinkBox = styled.div`
    width:1000px;
    display:flex;
    justify-content:end;
    span {
        font-size:20px;
        cursor:default;
        position:relative;
        bottom:9px;
    }
    :last-child {
        color:#7c7c7c;
        cursor: pointer;
    }
`;