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
          onFavorite
          onClick={() => {
            removeFavorite(game.id)
          }}
        >
          <IoIosStar className="IoIosStar" />
        </Button>
      ) : (
        <Button
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
