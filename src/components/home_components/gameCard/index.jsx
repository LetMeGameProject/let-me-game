import { StyledLi, Background } from "./styles"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"

const GameCard = ({ game, isFavorite = false }) => {
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
      {isFavorite ? (
        <button>
          <IoIosStar />
        </button>
      ) : (
        <button>
          <IoIosStarOutline />
        </button>
      )}
    </StyledLi>
  )
}

export default GameCard
