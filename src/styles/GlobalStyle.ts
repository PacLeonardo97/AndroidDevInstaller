import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: #E1E1E6;
  }
  html {
    background-color:#fff;
  }
  button {
    border: none;
    background: none;
    height: 72px;
    font-size: 14px;
    cursor: pointer;
    padding: 16px;
    color: #222;
    transition: 
      background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-weight: 600;
    line-height: 1.75;
    border: 1px solid rgba(48, 233, 134, 0.5);
  }
`
