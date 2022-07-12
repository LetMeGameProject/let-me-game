import StyledInput from "./styles";
import { BiSearchAlt } from "react-icons/bi";
import React, { useContext } from "react";
import { CurrentLobbyContext } from "../../../context/currentLobby";

const UsersInput = () => {
  // const { currentLobbyList, currentGame, setCurrentLobbyList } =
  //   useContext(CurrentLobbyContext);
  // console.log("input", currentLobbyList);

  return (
    <StyledInput>
      <input type="text" />

      <BiSearchAlt className="searchIcon" />
    </StyledInput>
  );
};

export default UsersInput;
