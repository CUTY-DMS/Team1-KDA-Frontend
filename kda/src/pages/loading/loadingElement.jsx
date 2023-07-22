import { styled, keyframes } from "styled-components";

const ani = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
`;

const Element = styled.div`
    width:250px;
    height:50px;
    background-color:#9DC08B;
    animation: ${ani} 2s linear infinite;
`;

export default Element;