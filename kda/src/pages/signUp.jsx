import React from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";

function SignInPage() {

    const onSignIn = () => {
        window.location.href = "/signIn";
    };

    return (
        <Body>
            <TopBox>
                <Title>로그인</Title>
                <Img><img src="/images/signpagelogo.svg" alt="" /></Img>
            </TopBox>
            <InputBox>
                <TextField type="text" width={1000} height={50} text="이름"/>
                <TextField type="email" width={1000} height={50} text="이메일"/>
                <TextField type="password" width={1000} height={50} text="비밀번호"/>
                <TextField type="password" width={1000} height={50} text="비밀번호 확인"/>
                <InnerInputBox>
                    <TextField type="text" width={310} height={50} text="학년"/>
                    <TextField type="text" width={310} height={50} text="반"/>
                    <TextField type="text" width={310} height={50} text="생년월일 (ex 20001212)"/>
                </InnerInputBox>
            </InputBox>
            <BottomBox>
                <TextField type="text" width={650} height={50} text="교사 확인 코드"/>
                <Button red={false} width={300} text="회원가입"></Button>
            </BottomBox>
            <LinkBox>
                <span>계정이 있으신가요?&nbsp;&nbsp;</span>
                <span onClick={onSignIn}>로그인</span>
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
    margin-top:40px;
`;

const InputBox = styled.div`
    width:1000px;
    :nth-child(1n) {
        margin-top:70px;
    }
    :first-child {
        margin-top:1px;
    }
`;

const InnerInputBox = styled.div`
    width:1000px;
    display:flex;
    justify-content:space-between;
    :nth-child(1n) {
        margin-top:0px;
    }
`;

const LinkBox = styled.div`
    width:1000px;
    display:flex;
    justify-content:end;
    span {
        font-weight:100;
        font-size:20px;
        cursor:default;
        margin-top:5px;
    }
    :first-child {
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    :last-child {
        color:#7c7c7c;
        cursor: pointer;
        transition:0.1s ease-in-out;
        &:hover {
            opacity: .8;
            text-decoration:underline;
        }
    }
`;

const BottomBox = styled.div`
    width:1000px;
    height:50px;
    display:flex;
    justify-content:space-between;
    margin-top:70px;
    :first-child {
        position:relative;
        top:6px;
    }
`;