import { FavoriteProvider } from "./FavoriteList";
import { GamesProvider } from "./GameList/gameList";
import { UserProvider } from "./User";
import { LobbyProvider } from "./OpenLobby";
import { CurrentLobbyProvider } from "./currentLobby";

const Providers = ({ children }) => {
  return (
    <CurrentLobbyProvider>
      <LobbyProvider>
        <UserProvider>
          <GamesProvider>
            <FavoriteProvider>{children}</FavoriteProvider>
          </GamesProvider>
        </UserProvider>
      </LobbyProvider>
    </CurrentLobbyProvider>
  );
};

export default Providers;
