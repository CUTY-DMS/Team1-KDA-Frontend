import React, { useState } from "react";
import { styled } from "styled-components";

function TextField({width,height,text}) {
    const [upText, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true);
    }

    const onBlur = (e) => {
        if(e.target.value === "") setFocus(false);
    }


    return (
        <Wrapper width={width} height={height}>
            <Input width={width} height={height} onFocus={onFocus} onBlur={onBlur}/>
            <Label upText={upText}>{text}</Label>
        </Wrapper>
    )
}

export default TextField;

const Wrapper = styled.div`
    width:${({width}) => (width ? `${width}px` : "100px")};
    height:${({height}) => (height ? `${height}px` : "100px")};
`;

const Input = styled.input`
    width:${({width}) => (width ? `${width-20}px` : "100px")};
    height:${({height}) => (height ? `${height-10}px` : "50px")};
    font-size:24px;
    height:25px;
    border:0;
    border-bottom:1px solid black;
    padding:5px 10px;
    outline:none;
`;

const Label = styled.label`
    font-size: ${({ upText }) => (upText ? "16px" : "24px")};
    font-weight: 100;
    pointer-events: none;
    position: relative;
    transition:0.2s ease-in-out;
    bottom: ${({ upText }) => (upText ? "60px" : "34px")};
    left: ${({ upText }) => (upText ? "13px" : "10px")};
`;
