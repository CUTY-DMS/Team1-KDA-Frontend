import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { myInfo } from "../../apis/myInfo";
import { useRecoilState } from "recoil";
import { myInfoState } from "../../utils/atom/atom";

function Header() {
  const [data, setData] = useRecoilState(myInfoState);
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

  const pathSplit = window.location.href.split("/");
  const path = pathSplit[3];

  useEffect(() => {
    myInfo(accessToken)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onHref = (where) => {
    window.location.href = `/${where}`;
  };

  return (
    <Body>
      <Wrapper>
        <LeftBox>
          <img
            src='/images/signpagelogo.svg'
            onClick={() => onHref("main")}
            path={path}
            this={"main"}
          />
          <LeftBoxText
            onClick={() => onHref("student")}
            path={path}
            this={"student"}>
            학생보기
          </LeftBoxText>
          <LeftBoxText
            onClick={() => onHref("notification")}
            path={path}
            this={"notification"}>
            공지
          </LeftBoxText>
          <LeftBoxText
            onClick={() => onHref("schedule")}
            path={path}
            this={"schedule"}>
            일정
          </LeftBoxText>
        </LeftBox>
        <RightBox>
          <Img>
            <img src='' />
          </Img>
          <RigthBoxInnerBox>
            {data ? (
              <span>
                {data.teachGrade}-{data.teachClass} {data.name}
              </span>
            ) : (
              <span>로딩중...</span>
            )}
            <span onClick={() => onHref("myInformation")}>&lt; 마이페이지</span>
          </RigthBoxInnerBox>
          <div className='line'></div>
        </RightBox>
      </Wrapper>
    </Body>
  );
}

export default Header;

const Body = styled.div`
  height: 80px;
  display: flex;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const LeftBox = styled.div`
  margin-left: 128px;
  display: flex;
  width: 500px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

const LeftBoxText = styled.span`
  cursor: pointer;
  color: #7c7c7c;
  font-weight: ${(prop) => (prop.path === prop.this ? "700" : "100")};
  font-size: 18px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: 0.2s ease-in-out;
  opacity: ${(prop) => (prop.path === prop.this ? "1" : "0.8")};
  &:hover {
    opacity: 1;
  }
`;

const RightBox = styled.div`
  width: 225px;
  height: 80px;
  margin-right: 56px;
  display: flex;
  align-items: center;
  .line {
    position: relative;
    left: 15px;
    width: 1px;
    height: 50px;
    background-color: #609966;
  }
`;

const Img = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid black;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const RigthBoxInnerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  align-items: end;

  :first-child {
    font-size: 20px;
    font-weight: 100;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  :last-child {
    cursor: pointer;
    font-size: 15px;
    font-weight: 100;
    color: #7c7c7c;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
