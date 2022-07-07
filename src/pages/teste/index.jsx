import React from "react";
import { useContext } from "react";
import { CurrentLobbyContext } from "../../context/currentLobby";

export default function Teste() {
  const { currentLobbyList, currentGame } = useContext(CurrentLobbyContext);
  return (
    <div>
      {currentLobbyList.map((elem, index) => {
        if (elem.current_game.game_id === currentGame.id) {
          return (
            <pre style={{ color: "white" }} key={index}>
              {JSON.stringify(elem)}
            </pre>
          );
        }
      })}
    </div>
  );
}
