import { useEffect } from "react";
import { createContext, useState } from "react";
import { internalApi } from "../../services/internalAPI";

export const FavoriteContext = createContext();

function getFavoriteGamesFromApi(array) {
  const token = localStorage.getItem("@tokenLMG");
  const currentUserId = localStorage.getItem("@id");

  return internalApi
    .get(`users/${currentUserId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data.favorite_games)
    .then((res) => array(res));
}

export const FavoriteProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);

  useEffect(() => {
    getFavoriteGamesFromApi(setFavoriteList);
  }, []);

  function addFavorite(game) {
    const token = localStorage.getItem("@tokenLMG");
    const currentUserId = localStorage.getItem("@id");
    const newArray = [...favoriteList, game];
    setFavoriteList(newArray);
    const body = {
      favorite_games: newArray,
    };

    internalApi.patch(`users/${currentUserId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  const removeFavorite = (gameId) => {
    const token = localStorage.getItem("@tokenLMG");
    const currentUserId = localStorage.getItem("@id");

    const newFavoriteList = favoriteList.filter((game) => game.id !== gameId);
    setFavoriteList(newFavoriteList);
    const body = {
      favorite_games: newFavoriteList,
    };
    internalApi.patch(`users/${currentUserId}`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteList,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};
