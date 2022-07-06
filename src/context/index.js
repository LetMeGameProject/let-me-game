import { FavoriteProvider } from "./FavoriteList"
import { GamesProvider } from "./GameList/gameList"

const Providers = ({ children }) => {
  return (
    <GamesProvider>
      <FavoriteProvider>{children}</FavoriteProvider>
    </GamesProvider>
  )
}

export default Providers
