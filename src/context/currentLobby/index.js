import { createContext, useEffect, useState } from "react";
import { internalApi } from "../../services/internalAPI";
export const CurrentLobbyContext = createContext();

export const CurrentLobbyProvider = ({ children }) => {
  const [currentLobbyList, setCurrentLobbyList] = useState([]);
  const [currentGame, setCurrentGame] = useState(
    JSON.parse(localStorage.getItem("@CURRENT_GAME")) || {}
  );
  const [inputKey, setInputKey] = useState("");
  const [curUser, setCurUser] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("@tokenLMG");
    internalApi
      .get("online_users_list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setCurrentLobbyList(res));
  }, []);
  function getGameUsersCount(gameID) {
    const resultado = currentLobbyList.reduce((a, b) => {
      if (b.current_game.game_id === gameID) a++;
      return a;
    }, 0);
    return resultado;
  }
  return (
    <CurrentLobbyContext.Provider
      value={{
        setCurrentLobbyList,
        currentLobbyList,
        getGameUsersCount,
        currentGame,
        setCurrentGame,
        inputKey,
        setInputKey,
        curUser,
        setCurUser,
      }}
    >
      {children}
    </CurrentLobbyContext.Provider>
  );
};
