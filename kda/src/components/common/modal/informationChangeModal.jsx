import React, { useState } from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import TextField from "../TextField";
import Button from "../Button";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import { informationModify } from "../../../apis/infoModify";

function InformationChangeModal() {
  const closeModal = useResetRecoilState(modalState);

  const [data, setData] = useState({
    name: "",
    birth: "",
    teachGrade: "",
    teachClass: "",
    password: "",
  });

  const { name, birth, teachGrade, teachClass, password } = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    informationModify(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  };

  return (
    <ModalBackground>
      <Body>
        <InputBox>
          <TextField
            type='text'
            width={1000}
            height={50}
            text='이름'
            name='name'
            value={name}
            event={onChange}
          />
          <TextField
            type='text'
            width={1000}
            height={50}
            text='생년월일 (ex 20001212)'
            name='birth'
            value={birth}
            event={onChange}
          />
          <GradeClassBox>
            <TextField
              type='text'
              width={480}
              height={50}
              text='학년'
              name='teachGrade'
              value={teachGrade}
              event={onChange}
            />
            <TextField
              type='text'
              width={480}
              height={50}
              text='반'
              name='teachClass'
              value={teachClass}
              event={onChange}
            />
          </GradeClassBox>
          <TextField
            type='password'
            width={1000}
            height={50}
            text='비밀번호'
            name='password'
            value={password}
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

export default InformationChangeModal;

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
  display: flex;
  flex-direction: column;
  > div {
    margin-top: 50px;
  }
`;

const GradeClassBox = styled.div`
  display: flex;
  > :last-child {
    margin-left: 40px;
  }
`;

const BtnBox = styled.div`
  margin-top: 30px;
  display: flex;
  width: 660px;
  justify-content: space-between;
`;
