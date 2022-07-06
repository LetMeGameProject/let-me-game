import { createContext, useEffect, useState } from "react"
import { Api } from "../services/externalApi"

export const GamesContext = createContext([])

export const GamesProvider = ({ children }) => {
  const ApiKey = "?key=ac369d35b8e14058a2cecb25c317e6eb"

  const [gameList, setGameList] = useState([])
  const [page, setPage] = useState(1)

  const loadMore = () => {
    setPage(page + 1)
  }

  useEffect(() => {
    Api.get(`/games${ApiKey}&page=${page}&page_size=${15}`)
      .then((res) => setGameList([...gameList, ...res.data.results]))
      .catch((err) => console.log(err))
  }, [page])

  return (
    <GamesContext.Provider value={{ gameList, loadMore }}>
      {children}
    </GamesContext.Provider>
  )
}
