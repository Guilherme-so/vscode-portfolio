import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background: purple; */
    font-family: "Monaco", "Menlo", monospace;
    font-size: 14px;
  }

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}

`;
 
export default GlobalStyle;

