import { useContext } from "react"
import Carousel from "../../components/home_components/Carousel"
import GameList from "../../components/home_components/gameList"
import SearchInput from "../../components/home_components/searchInput"
import { GamesContext } from "../../context/GameList/gameList"
import StyledMain from "./styles"
import Header from "../../components/header"
import { Toaster } from "react-hot-toast"


const Home = () => {
  const { loadMore } = useContext(GamesContext)

  return (
    <>
      <Toaster />
      <Header />
      <StyledMain>
        <section>
          <Carousel />
          <SearchInput />
          <GameList />
          <button className="loadMore" onClick={() => loadMore()}>
            Load More
          </button>
        </section>
      </StyledMain>
    </>
  )
}

export default Home
