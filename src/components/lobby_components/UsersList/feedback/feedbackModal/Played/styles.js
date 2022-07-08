import styled from "styled-components"

export const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`
export const StyledButton = styled.button`
  background-color: var(--background-color);
  color: var(--primary-white);

  box-sizing: border-box;

  max-width: 90px;
  width: 90px;
  max-height: 40px;
  height: 40px;

  font-size: 18px;
  font-weight: 600;

  border-radius: 10px;

  :hover {
    background-color: var(--primary-white);
    color: var(--background-color);
    border: 2px solid var(--foreground-color);
    transition: 0.3s;
  }
`

export const StyledP = styled.p`
  font-size: 24px;
  font-weight: 500;
  padding: 0 5px 0 5px;
  color: var(--background-color);

  font-family: "Inter", sans-serif;
  text-align: center;
  letter-spacing: 1px;
`
