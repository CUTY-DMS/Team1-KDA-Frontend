import React from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import TextField from "../TextField";
import Button from "../Button";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";

function PasswordChangeModal() {
    const closeModal = useResetRecoilState(modalState);

    return (
        <ModalBackground>
            <Body>
                <InputBox>
                    <TextField type="password" width={1000} height={50} text="현재 비밀번호" name="currentPassword"/>
                    <TextField type="password" width={1000} height={50} text="변경할 비밀번호" name="currentPassword"/>
                    <TextField type="password" width={1000} height={50} text="변경할 비밀번호 확인" name="currentPassword"/>
                </InputBox>
                <BtnBox>
                    <Button red={false} width={300} text="저장"></Button>
                    <Button red={true} width={300} text="취소" event={closeModal}></Button>
                </BtnBox>
            </Body>
        </ModalBackground>
    )
}

export default PasswordChangeModal;

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
    margin-top:100px;
    width:1000px;
    :nth-child(2) {
        margin:50px 0;
    }
`;

const BtnBox = styled.div`
    margin-top:30px;
    display:flex;
    width:660px;
    justify-content:space-between;
`;