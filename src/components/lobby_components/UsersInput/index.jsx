import React from "react"
import StyledInput from "./styles"
import { BiSearchAlt } from "react-icons/bi"

const UsersInput = () => {
  return (
    <StyledInput>
      <input type="text" />

      <BiSearchAlt className="searchIcon" />
    </StyledInput>
  )
}

export default UsersInput
