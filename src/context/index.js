import { FavoriteProvider } from "./FavoriteList";
import { GamesProvider } from "./GameList/gameList";
import { UserProvider } from "./User";
import { CurrentLobbyProvider } from "./currentLobby";

const Providers = ({ children }) => {
  return (
    <CurrentLobbyProvider>
      <UserProvider>
        <GamesProvider>
          <FavoriteProvider>{children}</FavoriteProvider>
        </GamesProvider>
      </UserProvider>
    </CurrentLobbyProvider>
  );
};

export default Providers;
