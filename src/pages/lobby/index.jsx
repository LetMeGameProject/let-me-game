import React, { useContext, useEffect } from "react";
import UsersList from "../../components/lobby_components/UsersList";
import ContainerLobby from "./styles";
import UsersInput from "../../components/lobby_components/UsersInput";
import { LobbyContext } from "../../context/OpenLobby";
import Header from "../../components/header";
import ModalInbox from "../../components/modal_inbox";
import { LoggedUserContext } from "../../context/LoggedUser";
import { Redirect } from "react-router-dom";
import UserStatus from "../../components/lobby_components/user_status";
import { Toaster } from "react-hot-toast";

const Lobby = () => {
  const { background, setBackground, name } = useContext(LobbyContext)
  const { loggedUser } = useContext(LoggedUserContext)
  const game = JSON.parse(localStorage.getItem("@CURRENT_GAME"))

  useEffect(() => {
    setBackground(game.background_image)
  })

  return loggedUser ? (
    <>
      <Header />
      <Toaster
        toastOptions={{
          success: {
            style: {
              marginTop: 100,
            },
          },
        }}
      />
      <UserStatus />
      <ModalInbox />
      <ContainerLobby>
        <div className="image-container">
          <img src={background} alt="background_game_image" />
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
  )
}

export default Lobby
