import { useContext, useEffect } from "react";
import { RingLoader } from "react-spinners";
import { MdOutlineExpandMore } from "react-icons/md";
import { GamesContext } from "../../../context/GameList/gameList";
import { CurrentLobbyContext } from "../../../context/currentLobby";
import GameCard from "../gameCard";
import { StyledDiv, StyledUl } from "./styles";
import { internalApi } from "../../../services/internalAPI";

const GameList = () => {
  const { gameList, loading, loadMore } = useContext(GamesContext);
  const { getGameUsersCount, setCurrentLobbyList, currentLobbyList } =
    useContext(CurrentLobbyContext);
  useEffect(() => {
    const token = localStorage.getItem("@tokenLMG");
    internalApi
      .get("online_users_list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
      .then((res) => setCurrentLobbyList(res));
  }, []);

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
