import { createContext, useEffect, useState } from "react"

export const CurrentLobbyContext = createContext()

export const CurrentLobbyProvider = ({ children }) => {
  const [currentLobbyList, setCurrentLobbyList] = useState([])
  const [currentGame, setCurrentGame] = useState({})

  useEffect(() => {
    //implementar para pegar token atual do usuario no local storage
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1aGVuZkBnbWFpbC5jb20iLCJpYXQiOjE2NTcyMDkxMzMsImV4cCI6MTY1NzIxMjczMywic3ViIjoiNDg1OTg5NTg1ODU2NTY1NSJ9.jAjkE6tzxqRdDSvYRa16wLLQFKDXiz0Wwm9AHKGq63g"
    fetch("https://json-sever-let-me-game.herokuapp.com/online_users_list", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setCurrentLobbyList(res))
  }, [])

  function getGameUsersCount(gameID) {
    const resultado = currentLobbyList.reduce((a, b) => {
      if (b.current_game.game_id === gameID) a++
      return a
    }, 0)
    return resultado
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
  )
}
