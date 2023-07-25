import React, { useState } from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import TextField from "../TextField";
import Button from "../Button";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import { passwordModify } from "../../../apis/passwordModify";

function PasswordChangeModal() {
  const closeModal = useResetRecoilState(modalState);

  const [data, setData] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });

  const { oldPassword, newPassword, reNewPassword } = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    passwordModify(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err.response.status);
        alert("error");
      });
  };

  return (
    <ModalBackground>
      <Body>
        <InputBox>
          <TextField
            type='password'
            width={1000}
            height={50}
            text='현재 비밀번호'
            name='oldPassword'
            value={oldPassword}
            event={onChange}
          />
          <TextField
            type='password'
            width={1000}
            height={50}
            text='변경할 비밀번호'
            name='newPassword'
            value={newPassword}
            event={onChange}
          />
          <TextField
            type='password'
            width={1000}
            height={50}
            text='변경할 비밀번호 확인'
            name='reNewPassword'
            value={reNewPassword}
            event={onChange}
          />
        </InputBox>
        <BtnBox>
          <Button red={false} width={300} text='저장' event={onSubmit}></Button>
          <Button
            red={true}
            width={300}
            text='취소'
            event={closeModal}></Button>
        </BtnBox>
      </Body>
    </ModalBackground>
  );
}

export default PasswordChangeModal;

const Body = styled.div`
  width: 1200px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  margin-top: 100px;
  width: 1000px;
  :nth-child(2) {
    margin: 50px 0;
  }
`;

const BtnBox = styled.div`
  margin-top: 80px;
  display: flex;
  width: 660px;
  justify-content: space-between;
`;
