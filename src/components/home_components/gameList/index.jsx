import { useContext } from "react";
import { GamesContext } from "../../../context/GameList/gameList";
import GameCard from "../gameCard";
import { StyledDiv, StyledUl } from "./styles";
import { CurrentLobbyContext } from "../../../context/currentLobby";

const GameList = () => {
  const { gameList } = useContext(GamesContext);
  const { getGameUsersCount } = useContext(CurrentLobbyContext);

  return (
    <StyledDiv>
      <StyledUl>
        {gameList?.map((game, index) => {
          const userCount = getGameUsersCount(game.id);
          return <GameCard key={index} game={game} userCount={userCount} />;
        })}
      </StyledUl>
    </StyledDiv>
  );
};

export default GameList;
