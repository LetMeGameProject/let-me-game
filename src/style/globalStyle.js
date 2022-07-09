import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



 ::-webkit-scrollbar {
    width: 10px;
}
         
::-webkit-scrollbar-thumb {
    background: white; 
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background:#570A57; 
}


:root {
  --background-color: #14031E;
  --foreground-color: #570A57;
  --hover-color: #0a0000;
  --accent-color: #F806CC;
  --primary-white: #ffffff;
  --secondary-white: #f5f5f5;
}

#root {
    font-family: 'Inter', sans-serif;

}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: var(--background-color);
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
`;

export const ProgressBar = styled.progress`

    height: 13px;
    background-color: #DFC640;
    border: 1.5px solid var(--background-color);
    border-radius: 4px;
    &::-webkit-progress-bar {
        background-color: var(--background-color);
        border-bottom-right-radius: 4px;
        border-top-right-radius: 4px;
        border-bottom-left-radius: 4px;
        border-top-left-radius: 4px;
    }

    &::-webkit-progress-value {
        background-color: #DFC640;
        border-bottom-left-radius: 2px;
        border-top-left-radius: 2px;
        border-bottom-right-radius: 2px;
        border-top-right-radius: 2px;
    }
`

export default GlobalStyle

