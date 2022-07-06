import { useContext } from "react"

import { GamesContext } from "../../../context/gameList"
import GameCard from "../gameCard"
import { StyledDiv, StyledUl } from "./styles"

const GameList = () => {
  const { gameList } = useContext(GamesContext)

  return (
    <StyledDiv>
      <StyledUl>
        {gameList.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </StyledUl>
    </StyledDiv>
  )
}

export default GameList
