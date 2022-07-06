import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./style/globalStyle"

import Providers from "./context"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Providers>
      <App />
      <GlobalStyle/>
    </Providers>
  </React.StrictMode>
)
