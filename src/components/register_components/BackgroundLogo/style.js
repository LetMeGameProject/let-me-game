import styled from "styled-components";

export const DivImages = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${(prop) => prop.background});
  background-position: center;
  background-size: 100% auto;

  display: flex;
`;
