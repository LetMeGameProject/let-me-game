import styled from "styled-components"

const StyledInput = styled.div`
  width: 300px;
  height: 48px;
  background-color: white;
  padding: 10px;
  margin-top: 15px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    width: 100%;
  }

  .searchIcon {
    color: var(--background-white);
    height: 36px;
    font-size: 36px;
    line-height: 24px;

    :hover {
      color: var(--accent-color);
      transition: 0.3s;
      cursor: pointer;
    }
  }
`
export default StyledInput
