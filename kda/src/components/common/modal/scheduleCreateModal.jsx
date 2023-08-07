import React, { useState } from "react";
import ModalBackground from "./background";
import { styled } from "styled-components";
import TextField from "../TextField";
import Button from "../Button";
import { useResetRecoilState } from "recoil";
import { modalState } from "../../../utils/atom/atom";
import { scheduleCreate } from "../../../apis/scheduleCreate";

function ScheduleCreateModal() {
  const closeModal = useResetRecoilState(modalState);
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

  const [data, setData] = useState({
    year: "",
    month: "",
    day: "",
    title: "",
  });

  const { year, month, day, title } = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onClick = () => {
    console.log(1);
    scheduleCreate(data, accessToken)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  };

  return (
    <ModalBackground>
      <Body>
        <InputBox1>
          <TextField
            type='text'
            width={250}
            height={50}
            text='년'
            name='year'
            value={year}
            event={onChange}
          />
          <TextField
            type='text'
            width={250}
            height={50}
            text='월'
            name='month'
            value={month}
            event={onChange}
          />
          <TextField
            type='text'
            width={250}
            height={50}
            text='일'
            name='day'
            value={day}
            event={onChange}
          />
        </InputBox1>
        <InputBox2>
          <TextField
            type='text'
            width={800}
            height={50}
            text='제목'
            name='title'
            value={title}
            event={onChange}
          />
        </InputBox2>
        <BtnBox>
          <Button red={false} width={300} text='작성' event={onClick}></Button>
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

export default ScheduleCreateModal;

const Body = styled.div`
  width: 1200px;
  height: 600px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InputBox1 = styled.div`
  margin-top: 100px;
  width: 800px;
  display: flex;
  justify-content: space-between;
`;

const InputBox2 = styled.div`
  margin-top: 50px;
  width: 800px;
`;

const BtnBox = styled.div`
  margin-top: 80px;
  display: flex;
  width: 660px;
  justify-content: space-between;
`;
