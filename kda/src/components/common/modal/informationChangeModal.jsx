import React from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import TextField from "../TextField";
import Button from "../Button";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";

function InformationChangeModal() {
    const closeModal = useResetRecoilState(modalState);

    return (
        <ModalBackground>
            <Body>
                <InputBox>
                    <TextField type="text" width={1000} height={50} text="이름" name="name"/>
                    <TextField type="text" width={1000} height={50} text="생년월일" name="birth"/>
                    <GradeClassBox>
                        <TextField type="text" width={480} height={50} text="학년" name="grade"/>
                        <TextField type="text" width={480} height={50} text="반" name="class"/>
                    </GradeClassBox>
                    <TextField type="password" width={1000} height={50} text="비밀번호" name="password"/>
                </InputBox>
                <BtnBox>
                    <Button red={false} width={300} text="저장"></Button>
                    <Button red={true} width={300} text="취소" event={closeModal}></Button>
                </BtnBox>
            </Body>
        </ModalBackground>
    )
}

export default InformationChangeModal;

const Body = styled.div`
    width:1200px;
    height:600px;
    background-color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;

const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    > div {
        margin-top:50px;
    }
`;

const GradeClassBox = styled.div`
    display:flex;
    > :last-child {
        margin-left:40px;
    }
`;

const BtnBox = styled.div`
    margin-top:30px;
    display:flex;
    width:660px;
    justify-content:space-between;
`;