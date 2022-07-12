import StyledInput from "./styles";
// import { BiSearchAlt } from "react-icons/bi";
import { AiOutlineClear } from "react-icons/ai";
import React, { useContext } from "react";
import { CurrentLobbyContext } from "../../../context/currentLobby";

const UsersInput = () => {
  const { inputKey, setInputKey } = useContext(CurrentLobbyContext);

  return (
    <StyledInput>
      <input
        type="text"
        value={inputKey}
        onChange={(e) => setInputKey(e.target.value)}
      />
      {/* <BiSearchAlt className="searchIcon" /> */}
      <AiOutlineClear className="searchIcon" onClick={() => setInputKey("")} />
    </StyledInput>
  );
};

export default UsersInput;
