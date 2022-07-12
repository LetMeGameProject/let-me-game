import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { CurrentLobbyContext } from "../currentLobby";

export const LobbyContext = createContext();

export const LobbyProvider = ({ children }) => {
  const history = useHistory();
  const [openModalPlayed, setOpenModalPlayed] = useState(false);
  const [openModalFeedback, setOpenModalFeedback] = useState(false);

  const [background, setBackground] = useState("");

  const [gameName, setGameName] = useState("");
  const { setCurrentGame } = useContext(CurrentLobbyContext);

  const openLobby = (game) => {
    const { name, background_image } = game;
    setCurrentGame(game);
    localStorage.setItem("@CURRENT_GAME", JSON.stringify(game));
    setBackground(background_image);
    setGameName(name);
    history.push(`/lobby/${name}`);
  };

  return (
    <LobbyContext.Provider
      value={{
        background,
        gameName,
        openLobby,
        setBackground,
        openModalPlayed,
        setOpenModalPlayed,
        openModalFeedback,
        setOpenModalFeedback,
      }}
    >
      {children}
    </LobbyContext.Provider>
  );
};
