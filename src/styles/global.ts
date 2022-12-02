import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme["white"]};
    color: ${(props) => props.theme["black"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem Montserrat, sans-serif;
  }

  button {
    cursor: pointer;
    transition: all 0.4 ease;
    
    :hover {
      opacity: 0.5;
    }
  }

`;
