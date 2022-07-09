import { useContext } from "react";
import { RingLoader } from "react-spinners";
import { MdOutlineExpandMore } from "react-icons/md";
import { GamesContext } from "../../../context/GameList/gameList";
import { CurrentLobbyContext } from "../../../context/currentLobby";
import GameCard from "../gameCard";
import { StyledDiv, StyledUl } from "./styles";

const GameList = () => {
  const { gameList, loading, loadMore } = useContext(GamesContext);
  const { getGameUsersCount } = useContext(CurrentLobbyContext);

  return (
    <>
      {loading ? (
        <RingLoader
          className="loading"
          color="purple"
          size={125}
          speedMultiplier={0.8}
        />
      ) : (
        <StyledDiv>
          <StyledUl>
            {gameList?.map((game, index) => {
              const userCount = getGameUsersCount(game.id);
              return <GameCard key={index} game={game} userCount={userCount} />;
            })}
          </StyledUl>
          <button className="loadMore" onClick={() => loadMore()}>
            <MdOutlineExpandMore size={46} />
          </button>
        </StyledDiv>
      )}
    </>
  );
};

export default GameList;
