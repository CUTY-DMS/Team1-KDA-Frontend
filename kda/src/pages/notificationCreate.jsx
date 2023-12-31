import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import { notificationCreate } from "../apis/notificationCreate";
import { customToast } from "../utils/toast/customToast";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { gradeClassState, modalState } from "../utils/atom/atom";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotificationCreatePage() {
  const viewGradeClass = useRecoilValue(gradeClassState);
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));
  const [select, setSelect] = useState("ALL");
  const [data, setData] = useState({
    title: "",
    noti: select,
    contents: "",
    classes: 1,
    grade: 1,
  });

  const setModal = useSetRecoilState(modalState);

  const { title, contents } = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (data.title === "") {
      customToast("제목을 작성해주세요", "error");
      return;
    } else if (data.contents === "") {
      customToast("내용을 작성해주세요", "error");
      return;
    }
    notificationCreate(data, accessToken)
      .then((res) => {
        window.location.href = "/notification";
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  };

  const onClick = (kind) => {
    setSelect(kind);
    setData({
      ...data,
      noti: kind,
    });
  };

  const onExit = () => {
    window.location.href = `/notification`;
  };

  useEffect(() => {
    setData({
      ...data,
      grade: viewGradeClass.grade,
      classes: viewGradeClass.class,
    });
  }, [viewGradeClass]);

  return (
    <>
      <Header />
      <Body>
        <MainText>공지 작성하기</MainText>
        <TextField
          type='text'
          width={1200}
          height={50}
          text='제목을 입력해주세요'
          name='title'
          value={title}
          event={onChange}
        />
        <TextArea
          placeholder='내용을 입력해주세요'
          name='contents'
          onChange={onChange}
          value={contents}></TextArea>
        <BtnBox>
          <Btn
            onClick={() => {
              onClick("CLASS");
              setModal("gradeClass");
            }}
            selected={select}
            kind='CLASS'>
            {viewGradeClass.grade} - {viewGradeClass.class}
          </Btn>
          <Btn
            onClick={() => {
              onClick("ALL");
            }}
            selected={select}
            kind='ALL'>
            전체
          </Btn>
          <Btn
            onClick={() => {
              onClick("TEACHER");
            }}
            selected={select}
            kind='TEACHER'>
            교직원
          </Btn>
        </BtnBox>
        <BottomBox>
          <Button
            red={false}
            width={300}
            text='공지작성'
            event={onSubmit}></Button>
        </BottomBox>
        <ExitBtn onClick={onExit}>
          <FontAwesomeIcon icon={faArrowRotateLeft} fontSize={50} />
        </ExitBtn>
      </Body>
    </>
  );
}

export default NotificationCreatePage;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainText = styled.h1`
  font-size: 32px;
  font-weight: 700;
  width: 1200px;
  justify-content: start;
  margin: 80px 0 70px 0;
`;

const TextArea = styled.textarea`
  padding-top: 20px;
  padding-left: 25px;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  margin-top: 50px;
  width: 1180px;
  height: 375px;
  background-color: #f6f6f6;
  outline: none;
  border: none;
  border-radius: 10px;
`;

const BtnBox = styled.div`
  margin-top: 50px;
  display: flex;
  width: 1200px;
  height: 40px;
  margin-bottom: 50px;
  :first-child {
    border-radius: 5px 0 0 5px;
  }
  :last-child {
    border-radius: 0 5px 5px 0;
  }
  :nth-child(2) {
    border-left: 1px black solid;
    border-right: 1px black solid;
  }
`;

const BottomBox = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: end;
  margin-bottom: 100px;
`;

const Btn = styled.div`
  cursor: pointer;
  color: white;
  background-color: ${(prop) =>
    prop.selected === prop.kind ? "#9DC08B" : "#7c7c7c"};
  text-align: center;
  line-height: 40px;
  width: 400px;
  height: 40px;
  font-size: 20px;
  font-weight: 200;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  &:active {
    background-color: #609966;
    transition: 0s;
  }
`;

const ExitBtn = styled.div`
  cursor: pointer;
  display: flex;
  position: fixed;
  left: 70px;
  bottom: 50px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #609960;
  justify-content: center;
  align-items: center;
  color: white;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2) rotate(-360deg);
    opacity: 0.8;
  }
`;
