import React, { useState } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../components/common/Button";
import { useSetRecoilState } from "recoil";
import { modalState } from "../utils/atom/atom";

function MyPage() {
    const setState = useSetRecoilState(modalState);

    const onModal = (modalName) => {
        setState(modalName);
    }

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
                    <div className="btn" onClick={() => {onModal('information')}}>정보 변경<span><FontAwesomeIcon icon={faArrowUp} fontSize={50} style={{marginBottom:"5px"}} className="icon"/></span></div>
                    <div className="btn" onClick={() => {onModal('password')}}>비밀번호 변경<span><FontAwesomeIcon icon={faArrowUp} fontSize={50} style={{marginBottom:"5px"}} className="icon"/></span></div>
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
        font-size: 18px;
        font-weight: 100;
        color:#7c7c7c;
        cursor: pointer;
        transition:0.1s ease-in-out;
        &:hover {
            text-decoration:underline;
            opacity: .8;
        }
    }
`;

const InfoBox = styled.div`
    margin-bottom:26px;
    margin-left:30px;
    display:flex;
    flex-direction:column;
    width:120px;
    span {
        font-weight:300;
        font-size:18px;
    }
`;

const BtnBox = styled.div`
    margin-top:20px;
    width:700px;
    display:flex;
    justify-content:space-between;
    .btn {
        cursor: pointer;
        display:flex;
        flex-direction:column;
        align-items:center;
        width:300px;
        height:400px;
        border:#609966 4px solid;
        border-radius:10px;
        margin-top:26px;
        font-weight: 100;
        font-size:26px;
        text-align:center;
        line-height:120px;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        transition:0.2s ease-in-out;
        span {
            line-height:100px;
            display:inline-block;
            width:70px;
            height:70px;
            background-color:#609966;
            border-radius:50%;
            position:absolute;
            margin-top:320px;
            margin-left:210px;
            transform:rotate(45deg);
            transition:0.2s ease-in-out;
            .icon {
                color:white;
                transition:0.2s ease-in-out;
            }
        }
        &:hover {
            transform:scale(1.1);
            background-color:#609966;
            color:white;
            span {
                transform:scale(1.1);
                background-color:white;
                .icon {
                    color:#609966;
                }
            }
        }
    }
`;

const BottomBox = styled.div`
    margin-top:80px;
`;