import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const [favoriteList, setFavoriteList] = useState([]);
  // console.log(favoriteList)

  const addFavorite = (game) => {
    setFavoriteList([...favoriteList, game]);
  };

  const removeFavorite = (gameId) => {
    const newFavoriteList = favoriteList.filter((game) => game.id !== gameId);

    setFavoriteList(newFavoriteList);
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
