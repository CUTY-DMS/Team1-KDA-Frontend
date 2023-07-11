import React, { useRef, useState } from "react";
import { styled, css } from "styled-components";

function TextField({width,height}) {
    const [sex, setFocus] = useState(false);

    const onFocus = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }

    return (
        <Wrapper width={width} height={height}>
            <Input width={width} height={height} onFocus={onFocus} onBlur={onBlur} doFocus={sex}/>
            <Label>안녕</Label>
        </Wrapper>
    )
}

export default TextField;

const Wrapper = styled.div`
    width:${({width}) => (width ? `${width}px` : "100px")};
    height:${({height}) => (height ? `${height}px` : "100px")};
`;

const Input = styled.input`
    width:${({width}) => (width ? `${width}px` : "100px")};
    font-size:24px;
    height:25px;
    border:0;
    border-bottom:1px solid black;
    padding:5px 10px;
    outline:none;
`;

const Label = styled.label`
    font-size:24px;
    font-weight:100;
    pointer-events:none;
    position:relative;
    bottom:${({doFocus}) => (doFocus ? "68px" : "34px")};
    left:10px;
`;