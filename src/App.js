import { GamesProvider } from "./context/GameList/gameList"
import Header from "./components/header"
import Home from "./pages/home/index"

function App() {
  return (
    <GamesProvider>
      <Header />
      <Home />
    </GamesProvider>
  )
}

export default App
