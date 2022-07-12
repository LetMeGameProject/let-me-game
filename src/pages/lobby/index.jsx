import React, { useContext, useEffect } from "react"
import UsersList from "../../components/lobby_components/UsersList"
import ContainerLobby from "./styles"
import UsersInput from "../../components/lobby_components/UsersInput"
import { LobbyContext } from "../../context/OpenLobby"
import Played from "../../components/lobby_components/UsersList/feedback/feedbackModal/Played"
import Feedback from "../../components/lobby_components/UsersList/feedback/feedbackModal/Feedback"
import Header from "../../components/header"
import ModalInbox from "../../components/modal_inbox"
import UserStatus from "../../components/lobby_components/user_status"
import  { Toaster } from "react-hot-toast"

const Lobby = () => {

  const { background, name } = useContext(LobbyContext)
  
  return (
    <>
      <Header />
      
      <Toaster 
        toastOptions={{
        success: {
        style: {
            marginTop: 100,
        },
        },}}
      />
      <UserStatus/>
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
  )
}

export default Lobby
