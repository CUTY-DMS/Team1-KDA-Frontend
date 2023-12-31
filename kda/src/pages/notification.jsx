import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { allNoti } from "../apis/allNotification";
import { teachNoti } from "../apis/teacherNotification";
import timeSplit from "../utils/func/timeSplit";
import dateSplit from "../utils/func/dateSplit";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { modalState } from "../utils/atom/atom";
import { gradeClassState } from "../utils/atom/atom";
import { classNoti } from "../apis/classNotification";

function NotificationPage() {
  const [notis, setNotis] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));
  const [select, setSelect] = useState("ALL");

  const viewGradeClass = useRecoilValue(gradeClassState);
  const setModal = useSetRecoilState(modalState);

  useEffect(() => {
    if (select !== "CLASS") return;
    classNoti(accessToken, viewGradeClass.grade, viewGradeClass.class)
      .then((res) => {
        setNotis(res.data.reverse());
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [viewGradeClass]);

  useEffect(() => {
    if (select == "ALL") {
      allNoti(accessToken)
        .then((res) => {
          setNotis(res.data.reverse());
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (select == "TEACHER") {
      teachNoti(accessToken)
        .then((res) => {
          setNotis(res.data.reverse());
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [select]);

  const onClick = (id) => {
    window.location.href = `/notification/${id}`;
  };

  const onCreate = (id) => {
    window.location.href = `/notificationCreate`;
  };

  return (
    <>
      <Header />
      <Body>
        <TopBox>
          <div>
            <Btn
              onClick={() => {
                setModal("gradeClass");
                setSelect("CLASS");
              }}
              kind='CLASS'
              selected={select}>
              {viewGradeClass.grade} - {viewGradeClass.class} 공지
            </Btn>
            <Btn
              onClick={() => {
                setSelect("ALL");
              }}
              kind='ALL'
              selected={select}>
              전체 공지
            </Btn>
            <Btn
              onClick={() => {
                setSelect("TEACHER");
              }}
              kind='TEACHER'
              selected={select}>
              교직원 공지
            </Btn>
          </div>
        </TopBox>
        <NotificationContainer>
          {notis ? (
            <>
              {notis.length > 0 ? (
                notis.map((element) => (
                  <Notification
                    key={element.id}
                    onClick={() => onClick(element.id)}>
                    <span>{element.title}</span>
                    <span>
                      {dateSplit(element.dateTime)} -{" "}
                      {timeSplit(element.dateTime)} - {element.name} T
                    </span>
                  </Notification>
                ))
              ) : (
                <ErrorMsg>공지가 없습니다</ErrorMsg>
              )}
            </>
          ) : (
            <ErrorMsg>로딩중....</ErrorMsg>
          )}
        </NotificationContainer>
        <AddBtn onClick={onCreate}>
          <FontAwesomeIcon icon={faXmark} fontSize={50} />
        </AddBtn>
      </Body>
    </>
  );
}

export default NotificationPage;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMsg = styled.div`
  margin-top: 20vh;
  font-size: 36px;
  display: flex;
  justify-content: center;
`;

const TopBox = styled.div`
  width: 1280px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: end;
  div {
    display: flex;
    justify-content: space-between;
    width: 320px;
  }
`;

const Btn = styled.div`
  cursor: pointer;
  font-size: 18px;
  color: ${(prop) => (prop.selected === prop.kind ? "black" : "#7c7c7c")};
  transition: 0.1s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
  font-weight: ${(prop) => (prop.selected === prop.kind ? "400" : "100")};
`;

const NotificationContainer = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  > :first-child {
    margin-top: 0px;
  }
  > :last-child {
    margin-bottom: 100px;
  }
`;

const Notification = styled.div`
  cursor: pointer;
  margin-top: 25px;
  width: 1280px;
  height: 150px;
  border-radius: 0px 20px 20px 20px;
  box-shadow: 0px 0px 5px 3px #609966;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 0.05s ease-in-out;
  :first-child {
    margin-left: 80px;
    font-size: 36px;
    font-weight: 400;
  }
  :last-child {
    margin-left: 80px;
    font-size: 18px;
    font-weight: 100;
    color: #7c7c7c;
  }
  &:hover {
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.99);
  }
`;

const AddBtn = styled.div`
  cursor: pointer;
  display: flex;
  position: fixed;
  right: 70px;
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
    transform: scale(1.2) rotate(135deg);
    opacity: 0.8;
  }
`;
