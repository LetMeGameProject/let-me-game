import { createContext, useState } from "react"
import { Api } from "../services/externalApi"

export const GamesContext = createContext([])

export const GamesProvider = ({ children }) => {
  const ApiKey = "?key=c57d1dac6c854e5c904d64ac19791849"

  const [gameList, setGameList] = useState([])

  Api.get(`/games${ApiKey}`)
    .then((res) => setGameList(res.data.results))
    .catch((_) =>
      console.log("falha na rest: src/context/gameList.js - linha 11")
    )

  return (
    <GamesContext.Provider value={{ gameList }}>
      {children}
    </GamesContext.Provider>
  )
}
