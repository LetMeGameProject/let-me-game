import React from "react";
import StyledInput from "./styles";
import { BiSearchAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"


const UsersInput = () => {
  return (
    <StyledInput>
      <input type="text" />
      <div>
        <BiSearchAlt/>
      </div>
    </StyledInput>
    )


}

export default UsersInput