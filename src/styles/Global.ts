import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button {
    font: 16px;
    outline: none;
  }

  button, a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }  
`;
