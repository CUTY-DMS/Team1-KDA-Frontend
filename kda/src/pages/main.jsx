import React, { useState,useEffect } from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function MainPage() {
    const [date, setDate] = useState(()=> new Date())

    useEffect(()=>{
        const timeId = setInterval(()=>tick(),1000)
        console.log('setInteval')

        return() =>{
            clearInterval(timeId)
            console.log('clearInterval')
        }
    })

    const tick =() =>{
        setDate(new Date())
    }

    return (
        <>
            <Header/>
            <Body>
                <MainText>최수장님 반갑습니다!</MainText>
                <Timer>오늘은 {date.getFullYear()}년 {date.getMonth()}월 {date.getDay()}일 입니다.<br/>현재시간은 {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초 입니다.</Timer>
            </Body>
        </>
    )
}

export default MainPage;

const Body = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`;

const MainText = styled.div`
    margin-top:150px;
    font-size:32px;
    font-weight: 700;
`;

const Timer = styled.div`
    margin-top:100px;
    font-size:64px;
    font-weight:100;
    text-align:center;
`;