import { createGlobalStyle } from "styled-components";
import azul from "./images/azul.jpg";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
  }
  
  body {
    background-image: url(${azul});
  }
  

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;  
    grid-template-columns: 1fr 2fr;

  }

  li {
    padding: 5px;
    color: #535353;
    margin-top: 2px;
    margin-left: 60px;
  }

  `;
