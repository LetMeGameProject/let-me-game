import { FavoriteProvider } from "./FavoriteList";
import { GamesProvider } from "./GameList/gameList";
import { UserProvider } from "./User";
import { LobbyProvider } from "./OpenLobby";
import { CurrentLobbyProvider } from "./currentLobby";
import { LoggedUserProvider } from "./LoggedUser";

const Providers = ({ children }) => {
  return (
    <LoggedUserProvider>
      <CurrentLobbyProvider>
        <LobbyProvider>
          <UserProvider>
            <GamesProvider>
              <FavoriteProvider>{children}</FavoriteProvider>
            </GamesProvider>
          </UserProvider>
        </LobbyProvider>
      </CurrentLobbyProvider>
    </LoggedUserProvider>
  );
};

export default Providers;
