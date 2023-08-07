import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { useParams } from "react-router-dom";
import { detailNoti } from "../apis/detailNotification";
import timeSplit from "../utils/func/timeSplit";
import dateSplit from "../utils/func/dateSplit";
import contentSplit from "../utils/func/contentSplit";
import {
  faArrowRotateLeft,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { modalState, myInfoState } from "../utils/atom/atom";
import { deleteNoti } from "../apis/deleteNotification";

function NotificationDetailPage() {
  const { id } = useParams();

  const [notis, setNotis] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));
  const viewMyInfo = useRecoilValue(myInfoState);
  const setModal = useSetRecoilState(modalState);

  const onExit = () => {
    window.location.href = `/notification`;
  };

  useEffect(() => {
    detailNoti(accessToken, id)
      .then((res) => {
        setNotis(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClick = () => {
    deleteNoti(accessToken, id)
      .then((res) => {
        window.location.href = "/notification";
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onModify = () => {
    window.location.href = `/notificationModify/${id}`;
  };

  return (
    <>
      <Header />
      <Body>
        {notis ? (
          <>
            <TopBox>
              <InfomationBox>
                <span>{notis.title}</span>
                <span>
                  {dateSplit(notis.dateTime)} - {timeSplit(notis.dateTime)}
                </span>
              </InfomationBox>
              <DetailBox>
                <div>
                  분류 :{" "}
                  {notis.noti == "CLASS"
                    ? "반공지"
                    : notis.noti == "TEACHER"
                    ? "교사"
                    : notis.noti == "ALL"
                    ? "전체"
                    : null}
                </div>
                <div>
                  작성자 : {notis.name}{" "}
                  {notis.name == viewMyInfo.name ? <>(나)</> : null}
                </div>
                <div>
                  {notis.name == viewMyInfo.name ? (
                    <>
                      <FontAwesomeIcon
                        onClick={onModify}
                        icon={faPenToSquare}
                        fontSize={22}
                        style={{ cursor: "pointer" }}
                      />
                      <FontAwesomeIcon
                        onClick={onClick}
                        icon={faTrashCan}
                        fontSize={22}
                        style={{ marginLeft: "20px", cursor: "pointer" }}
                      />
                    </>
                  ) : null}
                </div>
              </DetailBox>
            </TopBox>
            <ContentBox>
              {contentSplit(notis.contents).map((element) => (
                <>
                  {element}
                  <br />
                </>
              ))}
            </ContentBox>
          </>
        ) : (
          <ErrorMsg>로딩중....</ErrorMsg>
        )}
        <ExitBtn onClick={onExit}>
          <FontAwesomeIcon icon={faArrowRotateLeft} fontSize={50} />
        </ExitBtn>
      </Body>
    </>
  );
}

export default NotificationDetailPage;

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
  width: 1600px;
  height: 220px;
  border-bottom: 1px solid black;
  display: flex;
`;

const InfomationBox = styled.div`
  width: 1400px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  :first-child {
    font-size: 38px;
    font-weight: 700;
  }
  :last-child {
    font-size: 20px;
    color: #7c7c7c;
    font-weight: 100;
  }
`;

const DetailBox = styled.div`
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    width: 200px;
    display: flex;
    justify-content: end;
    color: #7c7c7c;
  }
  > :nth-child(2) {
    margin: 10px 0;
  }
  :last-child {
    height: 22px;
    color: black;
    transition: 0.2s ease-in-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const ContentBox = styled.div`
  margin-top: 50px;
  width: 1600px;
  font-size: 20px;
  font-weight: 350;
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
