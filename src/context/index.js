import { FavoriteProvider } from "./FavoriteList"
import { GamesProvider } from "./GameList/gameList"
import { UserProvider } from "./User"
import { LobbyProvider } from "./OpenLobby"

const Providers = ({ children }) => {
  return (
    <LobbyProvider>
      <UserProvider>
        <GamesProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </GamesProvider>
      </UserProvider>  
    </LobbyProvider>

  )
}

export default Providers
