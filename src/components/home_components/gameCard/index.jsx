import { StyledLi, Background } from "./styles"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"

const GameCard = ({ game, isFavorite = false }) => {
  const { name, background_image } = game

  return (
    <StyledLi>
      <Background url={background_image} />
      <h3>{name}</h3>
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
