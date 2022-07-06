import { useContext, useState } from "react"
import { IoIosStarOutline, IoIosStar } from "react-icons/io"
import { FavoriteContext } from "../../../context/FavoriteList"
import Button from "./styles"

const CardsButton = ({ game, favorite = false }) => {
  const { addFavorite, removeFavorite } = useContext(FavoriteContext)
  const [setIsFavorite] = useState(favorite)

  return (
    <>
      {favorite ? (
        <Button
          onFavorite
          onClick={() => {
            removeFavorite(game.id)
            setIsFavorite(false)
          }}
        >
          <IoIosStar className="IoIosStar" />
        </Button>
      ) : (
        <Button
          onClick={() => {
            addFavorite(game)
            setIsFavorite(true)
          }}
        >
          <IoIosStarOutline />
        </Button>
      )}
    </>
  )
}

export default CardsButton
