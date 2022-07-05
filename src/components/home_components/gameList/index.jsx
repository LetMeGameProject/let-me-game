import CardGame from "../gameCard"
import { StyledDiv, StyledUl } from "./styles"

const GameList = () => {
  return (
    <StyledDiv>
      <StyledUl>
        {/* (Res da API).map((game) => {
                <GameCard>
            }) */}
        <CardGame />
      </StyledUl>
    </StyledDiv>
  )
}

export default GameList
