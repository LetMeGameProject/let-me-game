import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {
  --background-color: #14031E;
  --foreground-color: #570A57;
  --hover-color: #0a0000;
  --accent-color: #F806CC;
  --primary-white: #ffffff;
  --secondary-white: #f5f5f5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: content-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

ul, li, ol {
 list-style: none;
}

button {
    cursor: pointer;
    border: none;
}

input {
  cursor: text;
  border: none;
}
`

export default GlobalStyle
