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
                    <InfoBox></InfoBox>
                </TopBox>
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
`;

const Profile = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    overflow:hidden;
    border:1px solid black;
`;

const NameBox = styled.div`
    width:120px;
    display:flex;
    flex-direction:column;
    align-items:end;
    :first-child {
        font-size:40px;
        font-weight:700;
    }
    :last-child {
        color: #7C7C7C;
        font-size: 20px;
        font-weight: 100;
    }
`;

const InfoBox = styled.div`
    font-size:40px;
    font-weight:700;
`;