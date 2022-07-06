import { StyledLi, Background } from "./styles"
import CardsButton from "../CardsButton"
import { useContext } from "react"
import { FavoriteContext } from "../../../context/FavoriteList"

const GameCard = ({ game }) => {
  const { favoriteList } = useContext(FavoriteContext)
  const { name, background_image, genres } = game
  const genresGame = genres.slice(0, 2)

  return (
    <StyledLi>
      <Background url={background_image} />
      <h3>{name}</h3>
      <ul>
        {genresGame.map((genre, index) => (
          <li key={index}>{genre.name}</li>
        ))}
      </ul>
      {favoriteList.includes(game) ? (
        <CardsButton game={game} favorite />
      ) : (
        <CardsButton game={game} />
      )}
    </StyledLi>
  )
}

export default GameCard
