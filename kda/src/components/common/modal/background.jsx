import styled from "styled-components";

const ModalBackground = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default ModalBackground;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  position: fixed;
  overflow-y: hidden;
`;
