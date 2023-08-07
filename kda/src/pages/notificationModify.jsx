import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import TextField from "../components/common/TextField";
import Button from "../components/common/Button";
import { detailNoti } from "../apis/detailNotification";
import { useParams } from "react-router-dom";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { notificationModify } from "../apis/notificationModify";
import { customToast } from "../utils/toast/customToast";

function NotificationModifyPage() {
  const [notis, setNotis] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    dateTime: "",
    contents: "",
  });

  const { title, contents } = data;

  const onChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  useEffect(() => {
    detailNoti(accessToken, id)
      .then((res) => {
        setData({
          title: res.data.title,
          dateTime: res.data.dateTime,
          contents: res.data.contents,
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onSubmit = () => {
    if (data.title === "") {
      customToast("수정할 제목을 작성해주세요", "error");
      return;
    } else if (data.contents === "") {
      customToast("수정할 내용을 작성해주세요", "error");
      return;
    }
    notificationModify(data, accessToken)
      .then((res) => {
        window.location.href = `/notification/${id}`;
      })
      .catch((err) => {
        console.error(err);
        alert("error");
      });
  };

  const onExit = () => {
    window.location.href = `/notification/${id}`;
  };

  return (
    <>
      <Header />
      <Body>
        <MainText>공지 수정하기</MainText>
        <TextField
          type='text'
          width={1200}
          height={50}
          text='수정할 제목을 입력해주세요'
          name='title'
          value={title}
          event={onChange}
        />
        <TextArea
          placeholder='수정할 내용을 입력해주세요'
          name='contents'
          onChange={onChange}
          value={contents}></TextArea>
        <BottomBox>
          <Button
            red={false}
            width={300}
            text='공지수정'
            event={onSubmit}></Button>
        </BottomBox>
        <ExitBtn onClick={onExit}>
          <FontAwesomeIcon icon={faArrowRotateLeft} fontSize={50} />
        </ExitBtn>
      </Body>
    </>
  );
}

export default NotificationModifyPage;

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

const BottomBox = styled.div`
  width: 1200px;
  height: 50px;
  display: flex;
  justify-content: end;
  margin-top: 100px;
  margin-bottom: 100px;
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
