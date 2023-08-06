import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function Schedule() {
  const [year, setYear] = useState(2023);
  const [page, setPage] = useState(0);

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
        <ListBox>
          <List>
            <ListHead>{1 + page * 3}월</ListHead>
          </List>
          <List>
            <ListHead>{2 + page * 3}월</ListHead>
          </List>
          <List>
            <ListHead>{3 + page * 3}월</ListHead>
            <Item>afdghg1</Item>
            <Item>afdghg2</Item>
            <Item>afdghg</Item>
            <Item>afdghg</Item>
            <Item>afdghg</Item>
            <Item>afdghg</Item>
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
  display: flex;
  align-items: center;
  height: 50px;
  padding-left: 20px;
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
