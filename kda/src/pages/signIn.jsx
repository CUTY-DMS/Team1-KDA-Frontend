import React from "react";
import { styled } from "styled-components";
import TextField from "../components/common/TextField";

function SignInPage() {
    return (
        <Body>
            <TopBox>
                <Title>로그인</Title>
                <Img><img src="/images/signpagelogo.svg" alt="" /></Img>
            </TopBox>
            <InputBox>
                <TextField width={1000} height={50} text="이메일"/>
            </InputBox>
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
`;

const Title = styled.div`
    font-weight:bold;
    font-size:40px;
`;

const TopBox = styled.div`
    display:flex;
    justify-content:space-between;
    width:1040px;
    height:200px;
    align-items:center;
    margin-top:49px;
`;

const InputBox = styled.div`
`;