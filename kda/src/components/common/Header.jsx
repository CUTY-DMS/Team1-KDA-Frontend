import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { myInfo } from "../../apis/myInfo";
import { useRecoilState } from "recoil";
import { myInfoState } from "../../utils/atom/atom";

function Header() {
  const [data, setData] = useRecoilState(myInfoState);
  const [accessToken, setToken] = useState(localStorage.getItem("accessToken"));

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

  return (
    <Body>
      <Wrapper>
        <LeftBox>
          <img src='/images/signpagelogo.svg' />
          <span>학생보기</span>
          <span>공지</span>
          <span>우리반 캘린더</span>
          <span>시간표</span>
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
            <span>&lt; 마이페이지</span>
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
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.25);
  background-color: white;
`;

const LeftBox = styled.div`
  margin-left: 128px;
  display: flex;
  width: 634px;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  span {
    font-weight: 100;
    font-size: 18px;
    color: #7c7c7c;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
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
