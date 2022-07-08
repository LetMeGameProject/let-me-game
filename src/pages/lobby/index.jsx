import React, { useContext } from "react"
import UsersList from "../../components/lobby_components/UsersList"
import ContainerLobby from "./styles"
import UsersInput from "../../components/lobby_components/UsersInput"
import { LobbyContext } from "../../context/OpenLobby"
import ChatParaTeste from "../../components/lobby_components/UsersList/feedback/chatTest"
import Played from "../../components/lobby_components/UsersList/feedback/feedbackModal/Played"
import Feedback from "../../components/lobby_components/UsersList/feedback/feedbackModal/Feedback"

const Lobby = () => {
  const { background, name, setOpenModalChat } = useContext(LobbyContext)

  return (
    <>
      {/* MODAIS */}
      {/* BUTTON PARA ABRIR O PRIMEIRO MODAL <button onClick={() => setOpenModalChat(true)}>
        Open Feature Antoniel
      </button> */}
      <ChatParaTeste />
      <Played />
      <Feedback />
      {/* MODAIS */}
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
  )
}

export default Lobby
