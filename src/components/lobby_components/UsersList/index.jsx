import UserCard from "./Card";
import ThemeUserList from "./styles";
import React, { useContext } from "react";
import { CurrentLobbyContext } from "../../../context/currentLobby";

const UsersList = () => {
  const { currentLobbyList, currentGame } = useContext(CurrentLobbyContext);
  return (
    <ThemeUserList>
      {currentLobbyList.map((elem, index) => {
        if (elem.current_game.game_id === currentGame.id) {
          return <UserCard key={index} card={elem} />;
        }
      })}
    </ThemeUserList>
  );
};

export default UsersList;
