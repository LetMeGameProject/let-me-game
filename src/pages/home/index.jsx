import { useContext } from "react"
import GameList from "../../components/home_components/gameList"
import SearchInput from "../../components/home_components/searchInput"
import { GamesContext } from "../../context/GameList/gameList"
import StyledMain from "./styles"

const Home = () => {
  const { loadMore } = useContext(GamesContext)

  return (
    <StyledMain>
      <section>
        {/* <FavoriteGames/> */}
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
