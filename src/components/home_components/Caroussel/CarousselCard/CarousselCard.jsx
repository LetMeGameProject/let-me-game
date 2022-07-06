import React from "react";
import StyledCarrouselCard from "./styles";




const CarousselCard = ({game, removeFavorites}) =>{

  return (
    <StyledCarrouselCard>
      <div className="container-card">
        <div className="container-button">
          <button onClick={()=>removeFavorites(game.id)} className="button-container"></button>
        </div>
        <p>{game.name}</p>
      </div>
      <img src={game.img} alt=""/>
    </StyledCarrouselCard>
  )

}

export default CarousselCard