import React, { useContext } from "react";
import UsersList from "../../components/lobby_components/UsersList";
import ContainerLobby from "./styles";
import UsersInput from "../../components/lobby_components/UsersInput";
import { LobbyContext } from "../../context/OpenLobby";
import Header from "../../components/header";
import ModalInbox from "../../components/modal_inbox";
import { LoggedUserContext } from "../../context/LoggedUser";
import { Redirect } from "react-router-dom";

const Lobby = () => {
  const { background, name } = useContext(LobbyContext);
  const { loggedUser } = useContext(LoggedUserContext);

  return loggedUser ? (
    <>
      <Header />
      <ModalInbox />
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
  ) : (
    <Redirect to="/" />
  );
};

export default Lobby;
