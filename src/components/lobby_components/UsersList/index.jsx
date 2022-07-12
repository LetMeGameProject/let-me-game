import UserCard from "./Card";
import ThemeUserList from "./styles";
import React, { useContext, useEffect } from "react";
import { CurrentLobbyContext } from "../../../context/currentLobby";
import { internalApi } from "../../../services/internalAPI";

const UsersList = () => {
  const { currentLobbyList, currentGame, setCurrentLobbyList } =
    useContext(CurrentLobbyContext);
  useEffect(() => {
    const token = localStorage.getItem("@tokenLMG");
    internalApi
      .get(`online_users_list/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setCurrentLobbyList(res.data));
  }, []);

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
