<<<<<<< HEAD
import { UserProvider } from "./providers/user";
import { Routes } from "./routes";
import GlobalStyle from "./style/globalStyle";

function App() {
  return (
    <UserProvider>
      <GlobalStyle />
      <Routes />
    </UserProvider>
  );
=======
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
>>>>>>> dev
}

export default App;
