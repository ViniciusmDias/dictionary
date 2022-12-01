import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { WordProvider } from "./contexts/word";
import { Router as Routes } from "./routes";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <WordProvider>
          <GlobalStyle />
          <Routes />
        </WordProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
