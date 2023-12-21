import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --vh : 100%;
    --color : rgb(0, 123, 255);
  }

  body {
  padding: 0;
  margin: 0;
  font-family: 'NanumBarunGothic';
  color: #444;
  }

  div {
    box-sizing: border-box;
  }

  h1, h2, h3, h4, h5, p, span, input, textarea {
    padding: 0;
    margin: 0;
  }
  
  input, textarea {
    font-family: 'NanumBarunGothic';
  }
`

export default GlobalStyle;