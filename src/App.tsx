import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { useRecoilValue } from "recoil";
import { themeStatus } from "store/theme";

import Root from "./route/Root";

import { dark, light } from "constant/theme";

function App() {
  const theme = useRecoilValue(themeStatus);

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme ? dark : light}>
        <Root />
      </ThemeProvider>
    </>
  );
}
export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    user-select:none
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem; 
  }
`;
