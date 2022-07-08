import styled from "styled-components";

const StyledInput = styled.div`
  width:260px;
  height: 48px;
  background-color:white;
  padding:10px;
  border-radius:50px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  

  div{
    width:35px;
    height:35px;
    background-color:var(--accent-color);
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50px;
  }

`
export default StyledInput