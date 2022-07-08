import React from "react"
import StyledCarouselCard from "./styles"

import CardsButton from "../../CardsButton"

import { LobbyContext } from "../../../../context/OpenLobby"
import { useContext } from "react"

const CarouselCard = ({ game }) => {

  const {openLobby} = useContext(LobbyContext)

  return (
    <StyledCarouselCard>
      <div className="container-card">
        <div className="container-button">
          <CardsButton favorite game={game} />
        </div>
        <p onClick={()=> openLobby(game)}>{game.name}</p>
      </div>
      <img src={game.background_image} alt="Game background" />
    </StyledCarouselCard>
  )
}

export default CarouselCard
