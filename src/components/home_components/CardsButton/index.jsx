import { useContext } from "react"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"
import { FavoriteContext } from "../../../context/FavoriteList"
import Button from "./styles"

const CardsButton = ({ game, favorite = false }) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteContext)

  return (
    <>
      {favorite ? (
        <Button
          addFavorite
          onFavorite
          onClick={() => {
            removeFavorite(game.id)
          }}
        >
          <IoIosStar />
        </Button>
      ) : (
        <Button
          removeFavorite
          onClick={() => {
            addFavorite(game)
          }}
        >
          <IoIosStarOutline />
        </Button>
      )}
    </>
  )
}

export default CardsButton
