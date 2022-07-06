import { GamesProvider } from "./context/gameList"
import Home from "./pages/home"

function App() {
  return (
    <GamesProvider>
      <Home />
    </GamesProvider>
  )
}

export default App
