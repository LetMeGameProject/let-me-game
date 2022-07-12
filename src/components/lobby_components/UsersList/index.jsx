import UserCard from "./Card";
import ThemeUserList from "./styles";
import React, { useContext, useEffect } from "react";
import { CurrentLobbyContext } from "../../../context/currentLobby";
import { internalApi } from "../../../services/internalAPI";

const UsersList = () => {
  const { currentLobbyList, currentGame, setCurrentLobbyList } =
    useContext(CurrentLobbyContext);
  const { inputKey, setInputKey } = useContext(CurrentLobbyContext);
  // console.log(inputKey, "INOUYT");
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

  // let key = "joh";
  return (
    <ThemeUserList>
      {currentLobbyList
        .filter((elem) => {
          if (elem.current_game.game_id === currentGame.id) {
            return elem;
          }
        })
        .map((elem, index) => {
          if (elem.username.toLowerCase().includes(inputKey.toLowerCase())) {
            return <UserCard key={index} card={elem} />;
          }
        })}
    </ThemeUserList>
  );
};

export default UsersList;
