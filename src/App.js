import "./App.scss";
import NavigationBar from "./Shared/NavigationBar";
import Theme from "./Theme/Theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import GlobalStyles from "./Theme/GlobalStyle";
import { MobileBar } from "./Shared/MobileBar/MobileBar";

function App() {
  return (
    <MuiThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles />
      <NavigationBar />
      {/* <MobileBar /> */}
    </MuiThemeProvider>
  );
}

export default App;
