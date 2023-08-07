import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { schedule } from "../apis/schedule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faXmark } from "@fortawesome/free-solid-svg-icons";
import { scheduleDel } from "../apis/scheduleDelete";
import { modalState } from "../utils/atom/atom";
import { useSetRecoilState } from "recoil";

function Schedule() {
  const setState = useSetRecoilState(modalState);
  const [year, setYear] = useState(2023);
  const [page, setPage] = useState(0);
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));
  const [scheduleList, setSchedule] = useState();

  const onYearChange = (where) => {
    if (where == "left") {
      setYear(year - 1);
    } else {
      setYear(year + 1);
    }
  };

  const onPageChange = (where) => {
    if (where == "left") {
      setPage(page - 1);
      if (page == 0) {
        setPage(3);
      }
    } else {
      setPage(page + 1);
      if (page == 3) {
        setPage(0);
      }
    }
  };

  const onDelete = (id) => {
    scheduleDel(accessToken, id)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    schedule(accessToken)
      .then((res) => {
        setSchedule(res.data);
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
        <YearBox>
          <LeftYearController
            onClick={() => onYearChange("left")}></LeftYearController>
          <Year>{year}년</Year>
          <RightYearController
            onClick={() => onYearChange("right")}></RightYearController>
        </YearBox>
        {scheduleList ? (
          <>
            <ListBox>
              <List>
                <ListHead>{1 + page * 3}월</ListHead>
                {scheduleList.map((element) =>
                  element.year == year && element.month == 1 + page * 3 ? (
                    <Item>
                      {element.day}일 | {element.title}
                      <span
                        onClick={() => {
                          onDelete(element.id);
                        }}>
                        <FontAwesomeIcon icon={faTrashCan} fontSize={16} />
                      </span>
                    </Item>
                  ) : null
                )}
              </List>
              <List>
                <ListHead>{2 + page * 3}월</ListHead>
                {scheduleList.map((element) =>
                  element.year == year && element.month == 2 + page * 3 ? (
                    <Item>
                      {element.day}일 | {element.title}
                      <span
                        onClick={() => {
                          onDelete(element.id);
                        }}>
                        <FontAwesomeIcon icon={faTrashCan} fontSize={16} />
                      </span>
                    </Item>
                  ) : null
                )}
              </List>
              <List>
                <ListHead>{3 + page * 3}월</ListHead>
                {scheduleList.map((element) =>
                  element.year == year && element.month == 3 + page * 3 ? (
                    <Item>
                      {element.day}일 | {element.title}
                      <span
                        onClick={() => {
                          onDelete(element.id);
                        }}>
                        <FontAwesomeIcon icon={faTrashCan} fontSize={16} />
                      </span>
                    </Item>
                  ) : null
                )}
              </List>
            </ListBox>
            <PageBox>
              <LeftPageController
                onClick={() => onPageChange("left")}></LeftPageController>
              <Page page={page} this={0}></Page>
              <Page page={page} this={1}></Page>
              <Page page={page} this={2}></Page>
              <Page page={page} this={3}></Page>
              <RightPageController
                onClick={() => onPageChange("right")}></RightPageController>
            </PageBox>
          </>
        ) : (
          <ErrorMsg>로딩중...</ErrorMsg>
        )}
        <AddBtn onClick={() => setState("scheduleCreate")}>
          <FontAwesomeIcon icon={faXmark} fontSize={50} />
        </AddBtn>
      </Body>
    </>
  );
}

export default Schedule;

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

const YearBox = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
`;

const Year = styled.div`
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin: 0 20px 0 20px;
`;

const LeftYearController = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 20px solid #609960;
  border-left: 20px solid transparent;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const RightYearController = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 20px solid #609960;
  border-right: 20px solid transparent;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const ListBox = styled.div`
  margin-top: 50px;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const List = styled.div`
  width: 400px;
  height: 500px;
  background-color: white;
  border: 2px solid black;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: lightgray;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  }
`;

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
  box-shadow: 0px 2px rgba(0, 0, 0, 0.1);
  span {
    right: 20px;
    position: absolute;
    transition: 0.2s ease-in-out;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }
`;

const ListHead = styled.div`
  width: 400px;
  height: 80px;
  background-color: white;
  border-bottom: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
`;

const PageBox = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;

const Page = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: 0.2s ease-in-out;
  background-color: #609960;
  opacity: ${(prop) => (prop.page == prop.this ? "1" : "0.3")};
`;

const LeftPageController = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-right: 20px solid black;
  border-left: 20px solid transparent;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
  }
`;

const RightPageController = styled.div`
  cursor: pointer;
  width: 0;
  height: 0;
  border-bottom: 15px solid transparent;
  border-top: 15px solid transparent;
  border-left: 20px solid black;
  border-right: 20px solid transparent;
  transition: 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
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
