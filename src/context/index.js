import { FavoriteProvider } from "./FavoriteList"
import { GamesProvider } from "./GameList/gameList"
import { UserProvider } from "./User"

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <GamesProvider>
        <FavoriteProvider>
          {children}
        </FavoriteProvider>
      </GamesProvider>
    </UserProvider>
  )
}

export default Providers
