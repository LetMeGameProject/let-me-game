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

  .searchIcon {
    color: var(--primary-white);
    width: 36px;
    height: 36px;

    font-size: 30px;
    line-height: 24px;
    border-radius: 30px;

    :hover {
      color: var(--accent-color);
      transition: 0.3s;
      cursor: pointer;
    }
  }
`

export default StyledDiv
