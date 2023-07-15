import React from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";

function SignInPage() {
    const onForgetPassword = () => {
        window.location.href = "/findPassword";
    };
    const onSignUp = () => {
        window.location.href = "/signUp";
    };

    return (
        <Body>
            <TopBox>
                <Title>로그인</Title>
                <Img><img src="/images/signpagelogo.svg"/></Img>
            </TopBox>
            <InputBox>
                <TextField type="email" width={1000} height={50} text="이메일"/>
                <TextField type="password" width={1000} height={50} text="비밀번호"/>
            </InputBox>
            <LinkBox>
                <span>비밀번호를 잊으셨나요?&nbsp;&nbsp;</span>
                <span onClick={onForgetPassword}>비밀번호 찾기</span>
            </LinkBox>
            <BottomBox>
                <Button red={false} width={300} text="로그인"></Button>
            </BottomBox>
            <LinkBox2>
                <span>계정이 없으신가요?&nbsp;&nbsp;</span>
                <span onClick={onSignUp}>회원가입</span>
            </LinkBox2>
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
        font-weight:100;
        font-size:20px;
        cursor:default;
        position:relative;
        bottom:9px;
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
            text-decoration:underline;
            opacity: .8;
        }
    }
`;

const LinkBox2 = styled.div`
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
    margin-top:354px;
    display:flex;
    justify-content:end;
`;