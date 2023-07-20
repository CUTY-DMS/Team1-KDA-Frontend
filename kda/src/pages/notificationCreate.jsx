import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import TextField from "../components/common/TextField"
import Button from "../components/common/Button"

function NotificationCreatePage() {
    return (
        <>
            <Header/>
            <Body>
                <MainText>공지 작성하기</MainText>
                <TextField type="text" width={1200} height={50} text="제목을 입력해주세요" name="title"/>
                <TextArea placeholder="내용을 입력해주세요"></TextArea>
                <BtnBox>
                    <span>1 - 1</span>
                    <span>전체</span>
                    <span>교직원</span>
                </BtnBox>
                <BottomBox>
                    <Button red={false} width={300} text="공지작성"></Button>
                </BottomBox>
            </Body>
        </>
    )
}

export default NotificationCreatePage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const MainText = styled.h1`
    font-size:32px;
    font-weight:700;
    width:1200px;
    justify-content:start;
    margin:80px 0 70px 0;
`;

const TextArea = styled.textarea`
    padding-top:20px;
    padding-left:25px;
    font-family: Noto Sans;
    font-size: 18px;
    font-style: normal;
    margin-top:50px;
    width:1180px;
    height:375px;
    background-color:#F6F6F6;
    outline:none;
    border:none;
    border-radius:10px;
`;

const BtnBox = styled.div`
    margin-top:50px;
    display:flex;
    width:1200px;
    height:40px;
    margin-bottom:50px;
    span {
        color:white;
        background-color:#7C7C7C;
        text-align:center;
        line-height:40px;
        width:400px;
        height:40px;
        font-size:20px;
        font-weight:200;
    }
    :first-child {
        border-radius:5px 0 0 5px;
    }
    :last-child {
        border-radius:0 5px 5px 0;
    }
    :nth-child(2) {
        border-left:1px black solid;
        border-right:1px black solid;
    }
`;

const BottomBox = styled.div`
    width:1200px;
    height:50px;
    display:flex;
    justify-content:end;
    margin-bottom:100px;
`;