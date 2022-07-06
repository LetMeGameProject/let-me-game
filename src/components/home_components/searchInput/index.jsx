import { useContext } from "react"
import { BiSearchAlt } from "react-icons/bi"

import { GamesContext } from "../../../context/gameList"
import StyledDiv from "./styles"

const SearchInput = () => {
  const { searchByName, search, setSearch } = useContext(GamesContext)

  return (
    <StyledDiv>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        placeholder="Pesquisar por nome..."
      ></input>
      <button onClick={() => searchByName()}>
        <BiSearchAlt />
      </button>
    </StyledDiv>
  )
}

export default SearchInput
