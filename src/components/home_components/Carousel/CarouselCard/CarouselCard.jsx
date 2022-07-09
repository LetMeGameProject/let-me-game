import React from "react";
import StyledCarouselCard from "./styles";

import CardsButton from "../../CardsButton";
import { GiExitDoor } from "react-icons/gi";

import { LobbyContext } from "../../../../context/OpenLobby";
import { useContext } from "react";

const CarouselCard = ({ game, userCount }) => {
  const { openLobby } = useContext(LobbyContext);

  return (
    <StyledCarouselCard>
      <div className="container-card">
        <div className="container-button">
          <GiExitDoor
            className="iconLobby"
            onClick={() => openLobby(game)}
            // onClick={() => redirectToLobbyPage()}
          />
          <h4>{`${userCount} jogadores online`}</h4>
          <CardsButton favorite game={game} />
        </div>
        <p>{game.name}</p>
      </div>
      <img src={game.background_image} alt="Game background" />
    </StyledCarouselCard>
  );
};

export default CarouselCard;
