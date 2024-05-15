
import { createGlobalStyle } from "styled-components"; 

const GlobalStyles = createGlobalStyle`
:root {
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
  font-family: "Roboto", sans-serif;
    text-align: center;
}

  body {
    margin: 0;
    padding: 0;
    background-color: hsl(0, 0%, 89%);
  }
`;

export default GlobalStyles;
