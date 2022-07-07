import { StyledLi, Background } from "./styles"
import CardsButton from "../CardsButton"
import { useContext } from "react"
import { FavoriteContext } from "../../../context/FavoriteList"
import { useHistory } from "react-router-dom"
import { CurrentLobbyContext } from "../../../context/currentLobby"
import { GiExitDoor } from "react-icons/gi"

const GameCard = ({ game, userCount }) => {
  const { favoriteList } = useContext(FavoriteContext)
  const { name, background_image, genres } = game
  const genresGame = genres.slice(0, 2)
  let history = useHistory()
  const { setCurrentGame } = useContext(CurrentLobbyContext)

  function redirectToLobbyPage() {
    setCurrentGame(game)
    history.push("/teste")
  }
  return (
    <StyledLi>
      {/*  */}
      {/*  */}

      <GiExitDoor className="iconLobby" onClick={() => redirectToLobbyPage()} />

      <h4>{`${userCount} jogadores online`}</h4>

      {/* */}
      {/*  */}
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
