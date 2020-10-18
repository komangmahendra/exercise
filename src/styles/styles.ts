import styled, { createGlobalStyle } from 'styled-components/macro'

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    background: #F3F5F7;
    color: #3A4F62;
  }

  #root {
    height: 100vh;
    width: 100vw;
    overflow: unset;
    font-display: swap;
  }
  `

export const Layout = styled.div`
    height: 100%;
    width: 100%;
    display:flex;

    .sidebar {

    }
`

export const BasicContainer = styled.div`
background-color: #fff;
border: 1px solid rgba(58, 79, 98, 0.2);
box-sizing: border-box;
box-shadow: 0px 1px 2px rgba(58, 79, 98, 0.2);
border-radius: 4px;
padding: 20px;
`;



