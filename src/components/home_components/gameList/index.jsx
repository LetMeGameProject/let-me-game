import { useContext } from "react"
import { RingLoader } from "react-spinners"

import { GamesContext } from "../../../context/GameList/gameList"
import GameCard from "../gameCard"
import { StyledDiv, StyledUl } from "./styles"

const GameList = () => {
  const { gameList, loading, loadMore } = useContext(GamesContext)

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
            {gameList?.map((game, index) => (
              <GameCard key={index} game={game} />
            ))}
          </StyledUl>
          <button className="loadMore" onClick={() => loadMore()}>
            Load More
          </button>
        </StyledDiv>
      )}
    </>
  )
}

export default GameList
