import React from "react";
import { styled } from "styled-components";
import Header from "../components/common/Header";

function MainPage() {
    return (
        <>
            <Header/>
            <Body>
                asad
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