import { createContext, useState } from "react";

export const RemoveFavoriteContext = createContext()

export const RemoveFavoritProvider = ({children}) => {
  const [favoriteList, setFavoriteList] = useState([
    {img: "https://www.mobygames.com/images/covers/l/672322-minecraft-playstation-4-front-cover.jpg",name: "minecraft", id:1},

    {img: "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",name: "apex legends", id:2},

    {img: "https://s2.glbimg.com/BsRH4rij3O7pZ-gj3JCCLNFcFw0=/0x0:1100x618/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2022/Y/i/dULbPDQDC1fIKuUQQRug/csgo-image.jpg",name: "CS GO", id:3},

    {img: "https://www.techenet.com/wp-content/uploads/2021/06/Valorant.jpg",name:"valorant", id:4}
  ]) // => array feito como exemplo para consumir dados, substituir por lista de favoritos

  const removeFavorites = (gameId) => {
    const newFavoriteList = favoriteList.filter((game)=> game.id !== gameId)

    setFavoriteList(newFavoriteList)
  }

  return (
    <RemoveFavoriteContext.Provider value={{favoriteList, removeFavorites}}>
      {children}
    </RemoveFavoriteContext.Provider>
  )
}