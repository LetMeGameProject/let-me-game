import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  margin-bottom: 32px;

  input {
    width: 250px;
    height: 35px;

    padding-left: 15px;
    margin-right: 10px;

    border-radius: 30px;
  }

  button {
    background-color: var(--foreground-color);
    color: var(--primary-white);

    width: 36px;
    height: 36px;

    font-size: 30px;
    line-height: 24px;
    border-radius: 30px;

    :hover {
      background-color: var(--hover-color);
      transition: 0.3s;
    }
  }
`

export default StyledDiv
