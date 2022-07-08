import React, { useContext } from "react";
import UsersList from "../../components/lobby_components/UsersList";
import ContainerLobby from "./styles";
import UsersInput from "../../components/lobby_components/UsersInput";
import { LobbyContext } from "../../context/OpenLobby";
import { CurrentLobbyContext } from "../../context/currentLobby";

const Lobby = () => {
  const { background, name } = useContext(LobbyContext);
  const { currentLobbyList, currentGame } = useContext(CurrentLobbyContext);

  return (
    <>
      <ContainerLobby>
        <div className="image-container">
          <img src={background} alt="" />
        </div>
        <div className="container">
          <h1>{name}</h1>
          <UsersInput />
          <UsersList />
        </div>
      </ContainerLobby>
    </>
  );
};

export default Lobby;
