import styled from "styled-components";

export const DivImages = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(prop) => prop.background});
  background-position: center;
  background-size: 100% auto;

  display: flex;
`;
