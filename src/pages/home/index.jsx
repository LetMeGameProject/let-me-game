import Carousel from "../../components/home_components/Carousel"
import GameList from "../../components/home_components/gameList"
import SearchInput from "../../components/home_components/searchInput"
import StyledMain from "./styles"
import Header from "../../components/header"
import { Toaster } from "react-hot-toast"
import ModalInbox from "../../components/modal_inbox"


const Home = () => {
  


  return (
    <>
      <Toaster />
      <Header/>
      <StyledMain>
        <section>
          <Carousel />
          <SearchInput />
          <ModalInbox/>
          <GameList />
        </section> 
      </StyledMain>
    </>
  )
}

export default Home
