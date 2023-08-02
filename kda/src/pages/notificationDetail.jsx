import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { useParams } from "react-router-dom";
import { detailNoti } from "../apis/detialNotification";
import timeSplit from "../utils/func/timeSplit";
import dateSplit from "../utils/func/dateSplit";
import contentSplit from "../utils/func/contentSplit";

function NotificationDetailPage() {
  const { id } = useParams();

  const [notis, setNotis] = useState();
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

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
                <div>분류 : 교사</div>
                <div>작성자 : {notis.name} (나)</div>
                <div>afsdg</div>
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
  :nth-child(2) {
    margin: 10px 0;
  }
`;

const ContentBox = styled.div`
  margin-top: 50px;
  width: 1600px;
  font-size: 20px;
  font-weight: 350;
`;
