import React from "react"
import StyledCarouselCard from "./styles"

import CardsButton from "../../CardsButton"

const CarouselCard = ({ game }) => {
  console.log(game)
  return (
    <StyledCarouselCard>
      <div className="container-card">
        <div className="container-button">
          <CardsButton favorite game={game} />
        </div>
        <p>{game.name}</p>
      </div>
      <img src={game.background_image} alt="Game background" />
    </StyledCarouselCard>
  )
}

export default CarouselCard
