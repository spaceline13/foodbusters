import Main from "./views/Main";
import React from "react";
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import "@fortawesome/fontawesome-free/css/all.min.css";

const theme = createMuiTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#b55d5d',
        },
        secondary: {
            // This is green.A700 as hex.
            main: '#fc8181',
        },
    },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <Main />
      </ThemeProvider>
  );
}

export default App;
