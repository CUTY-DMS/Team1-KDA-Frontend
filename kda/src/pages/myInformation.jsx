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
    .name {
        
    }
`;

const Profile = styled.div`
    width:150px;
    height:150px;
    border-radius:50%;
    overflow:hidden;
    border:1px solid black;
`;