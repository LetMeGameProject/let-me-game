<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
=======
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import GlobalStyle from "./style/globalStyle"
>>>>>>> dev

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
=======
    <App />
    <GlobalStyle />
  </React.StrictMode>
)
>>>>>>> dev
