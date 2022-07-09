import React, { useContext } from "react";
import UsersList from "../../components/lobby_components/UsersList";
import ContainerLobby from "./styles";
import UsersInput from "../../components/lobby_components/UsersInput";
import { LobbyContext } from "../../context/OpenLobby";

const Lobby = () => {
  const { background, name } = useContext(LobbyContext);

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
