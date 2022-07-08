import styled from "styled-components"

export const StyledDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loadMore {
    margin: 30px;
    min-height: 30px;
    min-width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const StyledUl = styled.ul`
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`
