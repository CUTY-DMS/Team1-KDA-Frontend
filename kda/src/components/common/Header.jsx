import React from "react";
import { styled } from "styled-components";

function Header() {
    return (
        <Body>
            <Wrapper>
                <LeftBox>
                    <img src="/images/signpagelogo.svg"/>
                    <span>학생보기</span>
                    <span>공지</span>
                    <span>우리반 캘린더</span>
                    <span>시간표</span>
                </LeftBox>
                <RightBox>
                    <Img>
                        <img src=""/>
                    </Img>
                    <RigthBoxInnerBox>
                        <span>1-2 최수장</span>
                        <span>&lt; 마이페이지</span>
                    </RigthBoxInnerBox>
                    <div className="line"></div>
                </RightBox>
            </Wrapper>
        </Body>
    )
}

export default Header;

const Body = styled.div`
    height:80px;
    display:flex;
    box-shadow: 0px 2px 3px 0px rgba(0,0,0,.25);
`;

const Wrapper = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
`;

const LeftBox = styled.div`
    margin-left:128px;
    display:flex;
    width:634px;
    height:80px;
    justify-content:space-between;
    align-items:center;
    img {
        width:80px;
        height:80px;
    }
    span {
        font-weight:100;
        font-size:18px;
    }
`;

const RightBox = styled.div`
    width:225px;
    height:80px;
    margin-right:56px;
    display:flex;
    align-items:center;
    .line {
        position:relative;
        left:15px;
        width:1px;
        height:50px;
        background-color:#609966;
    }
`;

const Img = styled.div`
    width:70px;
    height:70px;
    border-radius:50%;
    overflow:hidden;
    border:1px solid black;
`;

const RigthBoxInnerBox = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:25px;

    :first-child {
        font-size:26px;
        font-weight:100;
    }
    :last-child {
        font-size:20px;
        font-weight:100;
        color:#7C7C7C;
    }
`;