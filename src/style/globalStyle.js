import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {
    --background-black: #14031E;
    --background-white: #ffffff;
    --color-primary: #570A57;
    --color-secondary: #ffffff;
}

#root {
    width: 100vw;
    min-height: 100vh;
    background-color: var(--background-black);
    font-family: 'Inter', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul, li, ol {
 list-style: none;
}

button {
    cursor: pointer;
    border: none;
}

`

export default GlobalStyle
