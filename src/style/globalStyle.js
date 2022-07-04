import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

:root {
    // default colors
}

#root {
    width: 100vw;
    min-height: 100vh;
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
