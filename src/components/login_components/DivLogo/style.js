import styled from "styled-components"

export const Div = styled.div`
  height: 100vh;
  width: 50vw;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 220px;
    width: 220px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`
