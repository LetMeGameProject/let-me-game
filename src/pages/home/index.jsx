import Carousel from "../../components/home_components/Carousel"
import GameList from "../../components/home_components/gameList"
import SearchInput from "../../components/home_components/searchInput"
import StyledMain from "./styles"
import Header from "../../components/header"
import ModalInbox from "../../components/modal_inbox"
import { useContext } from "react"
import { LoggedUserContext } from "../../context/LoggedUser"
import { Redirect } from "react-router-dom"

const Home = () => {
  const { loggedUser } = useContext(LoggedUserContext)
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
  )
}

export default Home
