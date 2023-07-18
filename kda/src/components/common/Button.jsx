import React from "react";
import { styled } from "styled-components";

function Button({red,text,width,event}) {
    return (
        <Btn width={width} red={red} onClick={event}>
            {text}
        </Btn>
    )
}

export default Button;

const Btn = styled.button`
    width:${({width}) => (width ? `${width}px` : "100px")};
    background-color:${({red}) => (red ? `#B44646` : "#609966")};
    font-weight:100;
    font-size:24px;
    height:50px;
    color:white;
    border-radius:5px;
    border:none;
    cursor: pointer;
    transition:0.2s ease-in-out;

    &:hover {
        opacity: 0.8;
    }
    &:active {
        opacity: 1;
        transition:0.01s;
        transform:scale(0.9);
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;