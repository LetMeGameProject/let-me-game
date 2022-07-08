import { createContext, useState } from "react"
import { useHistory } from "react-router-dom"

export const LobbyContext = createContext()

export const LobbyProvider = ({ children }) => {
  // TESTE MODAL CHAT
  const [openModalChat, setOpenModalChat] = useState(false)
  // TESTE MODAL CHAT

  // Played?
  const [openModalPlayed, setOpenModalPlayed] = useState(false)
  // Played?

  // REVIEW
  const [openModalFeedback, setOpenModalFeedback] = useState(false)
  // REVIEW

  const [background, setBackground] = useState("")

  const [gameName, setGameName] = useState("")

  const history = useHistory()

  const openLobby = (game) => {
    const { name, background_image } = game

    setBackground(background_image)
    setGameName(name)

    history.push(`/lobby/${name}`)
  }

  return (
    <LobbyContext.Provider
      value={{
        background,
        gameName,
        openLobby,
        openModalChat,
        setOpenModalChat,
        openModalPlayed,
        setOpenModalPlayed,
        openModalFeedback,
        setOpenModalFeedback,
      }}
    >
      {children}
    </LobbyContext.Provider>
  )
}
