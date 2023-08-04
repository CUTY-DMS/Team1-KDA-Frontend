import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";

function TextField({ width, height, text, type, name, value, event }) {
  const [upText, setFocus] = useState(false);
  const input = useRef();

  const onFocus = () => {
    setFocus(true);
  };

  const onBlur = (e) => {
    if (input.current.value === "") setFocus(false);
  };

  useEffect(() => {
    if (input.current.value !== "") setFocus(true);
  });

  return (
    <Wrapper width={width} height={height}>
      <Input
        ref={input}
        type={type}
        width={width}
        height={height}
        value={value}
        name={name}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={event}
        autoComplete='off'
        className={type === "password" ? "password" : ""}
      />
      <Label upText={upText}>{text}</Label>
    </Wrapper>
  );
}

export default TextField;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "100px")};
  height: ${({ height }) => (height ? `${height}px` : "100px")};
`;

const Input = styled.input`
  width: ${({ width }) => (width ? `${width - 20}px` : "100px")};
  height: ${({ height }) => (height ? `${height - 10}px` : "50px")};
  font-size: 22px;
  height: 25px;
  border: 0;
  border-bottom: 1px solid black;
  padding: 5px 10px;
  outline: none;
`;

const Label = styled.label`
  font-size: ${({ upText }) => (upText ? "16px" : "20px")};
  color: ${({ upText }) => (upText ? "#7C7C7C" : "black")};
  font-weight: 100;
  pointer-events: none;
  cursor: none;
  position: relative;
  transition: 0.2s ease-in-out;
  bottom: ${({ upText }) => (upText ? "60px" : "34px")};
  left: ${({ upText }) => (upText ? "13px" : "10px")};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
