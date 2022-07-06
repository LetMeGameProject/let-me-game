import { useContext } from "react"
import Carousel from "../../components/home_components/Carousel"
import GameList from "../../components/home_components/gameList"
import SearchInput from "../../components/home_components/searchInput"
import { GamesContext } from "../../context/GameList/gameList"
import StyledMain from "./styles"

const Home = () => {
  const { loadMore } = useContext(GamesContext)

  return (
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
  )
}

export default Home
