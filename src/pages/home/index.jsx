import Carousel from "../../components/home_components/Carousel";
import GameList from "../../components/home_components/gameList";
import SearchInput from "../../components/home_components/searchInput";
import StyledMain from "./styles";
import Header from "../../components/header";
import ModalInbox from "../../components/modal_inbox";
import { useContext, useEffect } from "react";
import { LoggedUserContext } from "../../context/LoggedUser";
import { Redirect } from "react-router-dom";
import toast from "react-hot-toast";
import { internalApi } from "../../services/internalAPI";
import { FavoriteContext } from "../../context/FavoriteList";

const Home = () => {
  const { loggedUser } = useContext(LoggedUserContext);
  const { setFavoriteList } = useContext(FavoriteContext);

  useEffect(() => {
    toast.remove();

    const token = localStorage.getItem("@tokenLMG");
    const currentUserId = localStorage.getItem("@id");
    internalApi
      .get(`users/${currentUserId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data.favorite_games)
      .then((res) => setFavoriteList(res));
  }, []);

  return loggedUser ? (
    <>
      <Header />
      <StyledMain>
        <section>
          <Carousel />
          <SearchInput />
          <ModalInbox />
          <GameList />
        </section>
      </StyledMain>
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Home;
