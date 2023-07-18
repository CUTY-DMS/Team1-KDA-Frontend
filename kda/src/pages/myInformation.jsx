import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function MyPage() {
    return (
        <>
            <Header/>
            <Body>
                <TopBox>
                    <Profile>
                        <img src=''/>
                    </Profile>
                    <NameBox>
                        <span>최수장</span>
                        <span>로그아웃</span>
                    </NameBox>
                    <InfoBox>
                        <span>담당 : 1 - 2</span>
                        <span>2000 - 05 - 19</span>
                    </InfoBox>
                </TopBox>
                <BtnBox>
                    <div className="btn">담당 변경<span></span></div>
                    <div className="btn">생년월일 변경</div>
                    <div className="btn">비밀번호 변경</div>
                </BtnBox>
            </Body>
        </>
    )
}

export default MyPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const TopBox = styled.div`
    width:1420px;
    height:150px;
    margin-top:70px;
    display:flex;
    align-items:center;
`;

const Profile = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    overflow:hidden;
    border:1px solid black;
`;

const NameBox = styled.div`
    margin-left:30px;
    width:120px;
    display:flex;
    flex-direction:column;
    align-items:end;
    :first-child {
        font-size:36px;
        font-weight:700;
    }
    :last-child {
        color: #7C7C7C;
        font-size: 16px;
        font-weight: 100;
    }
`;

const InfoBox = styled.div`
    margin-left:30px;
    display:flex;
    flex-direction:column;
    width:120px;
    span {
        font-weight:300;
        font-size:20px;
    }
`;

const BtnBox = styled.div`
    margin-top:50px;
    width:800px;
    display:flex;
    flex-direction:column;
    .btn {
        width:800px;
        height:100px;
        border:#609966 4px solid;
        border-radius:100px;
        margin-top:26px;
        font-weight: 100;
        font-size:26px;
        text-align:center;
        line-height:100px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition:0.2s ease-in-out;
        &:hover {
            background-color:#609966;
            color:white;
        }
        span {
            display:inline-block;
            width:70px;
            height:70px;
            background-color:#609966;
            border-radius:50%;
            position:absolute;
            margin-left:255px;
            margin-top:15px;
        }
    }
    :first-child {
        margin-top:0;
    }
`;