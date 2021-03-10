import "./App.scss";
import NavigationBar from "./Components/NavigationBar";
import Theme from "./Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Theme/GlobalStyle";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      <NavigationBar />
    </MuiThemeProvider>
  );
}

export default App;
