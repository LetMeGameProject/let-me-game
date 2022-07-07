import styled from "styled-components";

export const DivImages = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(prop) => prop.background});
  background-position: center;
  background-size: 100% auto;

  display: flex;
`;
