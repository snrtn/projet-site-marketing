import { createGlobalStyle } from "styled-components";
import variable from "./variable";
import { r1620px } from "./responsive";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    font-size: ${variable.d14px};
    font-weight: 300;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    ${r1620px({
      fontSize: variable.m14px,
    })}
  }

  a {
    text-decoration: none;
    color: ${variable.black};
  }

  button,
  input {    
    outline: none;
  }

  button {
    cursor: pointer;
  }

  ol,
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  h1,h2,h3 {
    font-weight: 400;
    margin-top: 0;
    transform: rotate(0.06deg);
  }

  /* scroll bar */
  body::-webkit-scrollbar {  
    width: 12px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${variable.darkmode};
    border: 1px solid ${variable.lightgray};
    border-radius: 3px;  
  }

  body::-webkit-scrollbar-track {  
    background-color: ${variable.lightgray};
    border: none;
  }

  /* dark mode */
  @media (prefers-color-scheme: dark) {
    body {
    background: ${variable.darkmode};
    }

    h1,
    h2,
    h3 {
      color: ${variable.white};
    }

    p {
      color: ${variable.lightgray};
    }

    a {
      color: ${variable.steelblue};
    }
  }
`;
