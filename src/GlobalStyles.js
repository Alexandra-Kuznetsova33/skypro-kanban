import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', Arial, Helvetica, sans-serif;
    color: #000000;
  }

  #root {
    height: 100%;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: 100%;
    width: 100%;
    height: 100dvh;
    overflow: hidden;
    background-color: #f1f1f1;
  }

  .container {
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
  }

  ._hide {
    display: none;
  }

  ._dark {
    display: none;
  }

`;

export default GlobalStyles;