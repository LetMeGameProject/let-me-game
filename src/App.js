import Header from "./components/header"
import Home from "./pages/home/index"
import Providers from "./context"

function App() {
  return (
    <Providers>
      <Header />
      <Home />
    </Providers>
  )
}

export default App
