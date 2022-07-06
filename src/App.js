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
}

export default App;
