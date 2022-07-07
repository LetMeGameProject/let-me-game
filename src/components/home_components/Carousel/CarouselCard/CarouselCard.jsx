import React from "react"
import StyledCarouselCard from "./styles"

import CardsButton from "../../CardsButton"
import { GiExitDoor } from "react-icons/gi"

const CarouselCard = ({ game }) => {
  return (
    <StyledCarouselCard>
      <div className="container-card">
        <div className="container-button">
          {/*  */}
          {/*  */}

          <GiExitDoor
            className="iconLobby"
            // onClick={() => redirectToLobbyPage()}
          />

          {/*  */}
          {/*  */}

          <h4>{`${"userCount"} jogadores online`}</h4>
          <CardsButton favorite game={game} />
        </div>
        <p>{game.name}</p>
      </div>
      <img src={game.background_image} alt="Game background" />
    </StyledCarouselCard>
  )
}

export default CarouselCard
