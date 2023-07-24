import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NotificationPage() {
  return (
    <>
      <Header />
      <Body>
        <TopBox>
          <div>
            <span>1 - 1 공지</span>
            <span>전체 공지</span>
            <span>교사 공지</span>
          </div>
        </TopBox>
        <NotificationContainer>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
          <Notification>
            <span>대충 들어가야할 부분</span>
            <span>2022.08.22 오전 12:48 - 최수장 T</span>
          </Notification>
        </NotificationContainer>
        <AddBtn>
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

const TopBox = styled.div`
  width: 1280px;
  height: 155px;
  display: flex;
  align-items: center;
  justify-content: end;
  div {
    display: flex;
    justify-content: space-between;
    width: 320px;
    span {
      font-size: 18px;
      color: #7c7c7c;
    }
  }
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
  margin-top: 25px;
  width: 1280px;
  height: 150px;
  border-radius: 0px 20px 20px 20px;
  box-shadow: 0px 0px 5px 3px #609966;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :first-child {
    margin-left: 100px;
    font-size: 38px;
    font-weight: 400;
  }
  :last-child {
    margin-left: 100px;
    font-size: 20px;
    font-weight: 100;
    color: #7c7c7c;
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
