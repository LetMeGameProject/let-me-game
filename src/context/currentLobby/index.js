import { createContext, useEffect, useState } from "react";

export const CurrentLobbyContext = createContext();

export const CurrentLobbyProvider = ({ children }) => {
  const [currentLobbyList, setCurrentLobbyList] = useState([]);
  const [currentGame, setCurrentGame] = useState({});

  useEffect(() => {
    //implementar para pegar token atual do usuario no local storage
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmdvZEBtYXJnb2QuY29tIiwiaWF0IjoxNjU3MTU3MTQyLCJleHAiOjE2NTcxNjA3NDIsInN1YiI6IjQ4NTk4OTU4NTg1NjU2NTUifQ.vr9Vv1sMGYfT3tlpupZEV5Ddt8BAdpidF18H77jTgq8";
    fetch("https://json-sever-let-me-game.herokuapp.com/online_users_list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
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
        currentLobbyList,
        getGameUsersCount,
        currentGame,
        setCurrentGame,
      }}
    >
      {children}
    </CurrentLobbyContext.Provider>
  );
};
